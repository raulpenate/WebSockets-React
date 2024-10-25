import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../helpers/jwt";
import type { CustomRequest } from "../definitions/interfaces/customRequest.interface";
import type { customJwtPayload } from "../definitions/interfaces/jwtPayload.interface";

export const validateJWT = (
  req: CustomRequest<undefined>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("x-token");

    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "No JWT in request.",
      });
    }

    const { uid } = jwt.verify(token, SECRET_KEY) as customJwtPayload;
    req.uid = uid;

    next();
    // biome-ignore lint/correctness/noUnreachable: <explanation>
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: `${error}.`,
    });
  }
};
