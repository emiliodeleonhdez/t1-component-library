import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.authToken;
  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret);
    if (decoded) {
      next();
    }
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};
