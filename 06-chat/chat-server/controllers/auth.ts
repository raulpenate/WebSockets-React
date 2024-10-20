import type { Request, Response } from "express";
import type { CustomRequest } from "../definitions/interfaces/customRequest.interface";
import { type User, PrismaClient } from "@prisma/client";

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
    console.log(user);
    await prisma.user.create({ data: user });
    console.log("donee");

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const login = async (req: CustomRequest<User>, res: Response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

export const renewToken = async (_req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
