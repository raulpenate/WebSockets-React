import jwt, { type Secret } from "jsonwebtoken";

export const SECRET_KEY: Secret = process.env.JWT_KEY;

export const generateJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      SECRET_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          reject(`JWT wasn't generated.`);
        } else {
          resolve(token);
        }
      }
    );
  });
};