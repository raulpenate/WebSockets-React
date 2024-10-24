import type { Request, Response } from "express";
import type { CustomRequest } from "../definitions/interfaces/customRequest.interface";
import { type User, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateJWT } from "../helpers/jwt";
import { errorMsg } from "../helpers/errorMsg";
import { removeFields } from "../helpers/removeFields";

const prisma = new PrismaClient();

export const createUser = async (req: CustomRequest<User>, res: Response) => {
  try {
    const { email, password } = req.body;

    const emailExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: "email already exist.",
      });
    }
    const user: User = req.body;

    // Encrypting password: default = 10 rounds
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    const savedUser = await prisma.user.create({ data: user });

    const cleanUser = removeFields(savedUser, ["id", "password"]);

    // Generate JWT
    const token = await generateJWT(savedUser.id);

    res.json({
      ok: true,
      user: cleanUser,
      token,
    });
  } catch (error) {
    errorMsg(res, error);
  }
};

export const login = async (req: CustomRequest<User>, res: Response) => {
  const { email, password } = req.body;

  try {
    const userDB = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userDB) {
      return res.status(400).json({
        ok: false,
        msg: "email not found.",
      });
    }

    const validPassword = bcrypt.compareSync(password, userDB.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "Password is not correct",
      });
    }

    const token = await generateJWT(userDB.id);

    res.json({
      ok: true,
      user: removeFields(userDB, ["id", "password"]),
      token,
    });
  } catch (error) {
    errorMsg(res, error);
  }
};

export const renewToken = async (_req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
