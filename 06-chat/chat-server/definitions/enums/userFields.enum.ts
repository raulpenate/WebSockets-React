import { Validations } from "./validation.enum";

export enum UserFields {
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
  ONLINE = "online",
}

export const UserValidation = {
  [UserFields.NAME]: `${UserFields.NAME} ${Validations.EXIST}`,
  [UserFields.EMAIL]: `${UserFields.EMAIL} ${Validations.EXIST}`,
  [UserFields.PASSWORD]: `${UserFields.PASSWORD} ${Validations.EXIST}`,
  STRONGPASSWORD: `${UserFields.PASSWORD} ${Validations.STRONG}`,
  [UserFields.ONLINE]: `${UserFields.ONLINE} ${Validations.EXIST}`,
};
