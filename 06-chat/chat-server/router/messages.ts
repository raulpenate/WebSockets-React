import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt";
import { getChat } from "../controllers/messages";

export const router = Router();

router.get("/:from", validateJWT, getChat);
