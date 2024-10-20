import { Router, type Request } from "express";
import { createUser, login, renewToken } from "../controllers/auth";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {
  UserFields,
  UserValidation as Validation,
} from "../definitions/enums/userFields.enum";

const { NAME, EMAIL, PASSWORD, ONLINE } = UserFields;

const router = Router();

router.post(
  "/new",
  [
    check(NAME, Validation[NAME]).notEmpty(),
    check(EMAIL, Validation[EMAIL]).notEmpty(),
    check(PASSWORD, Validation[PASSWORD]).notEmpty(),
    check(PASSWORD, Validation.STRONGPASSWORD).isStrongPassword(),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check(EMAIL, Validation[EMAIL]).isEmail(),
    check(PASSWORD, Validation[PASSWORD]).notEmpty(),
    validateFields,
  ],
  login
);

router.get("/renew", renewToken);

export default router;
