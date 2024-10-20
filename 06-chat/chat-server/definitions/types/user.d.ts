import { Express, Request } from "express";

declare global {
  // biome-ignore lint/suspicious/noRedeclare: <explanation>
  namespace Express {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    export interface Request<T = any> {
      body: T;
    }
  }
}
