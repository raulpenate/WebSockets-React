import type { JwtPayload } from "jsonwebtoken";

export interface customJwtPayload extends JwtPayload {
  uid: string;
}
