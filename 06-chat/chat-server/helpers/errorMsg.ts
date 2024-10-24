import type { Response } from "express";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const errorMsg = (res: Response, error: any) => {
  console.log(error);
  res.status(500).json({
    ok: false,
    error,
  });
};
