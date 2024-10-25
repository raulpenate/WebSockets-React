import { json, type NextFunction, type Response } from "express";
import type { CustomRequest } from "../definitions/interfaces/customRequest.interface";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getChat = async (
  req: CustomRequest<undefined>,
  res: Response,
  next: NextFunction
) => {
  const { uid } = req;
  const { from: msgFrom } = req.params;

  const last30 = await prisma.message.findMany({
    where: {
      OR: [
        { from: uid, to: msgFrom },
        { to: uid, from: msgFrom },
      ],
    },
    take: 30,
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({
    ok: true,
    messages: last30,
  });
};
