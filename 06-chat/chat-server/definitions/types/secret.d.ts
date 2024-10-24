import type { Secret } from "jsonwebtoken";

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      JWT_KEY: Secret;
    }
  }
}
