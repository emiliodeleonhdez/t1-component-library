import { Request, Response, RequestHandler } from "express";

export const registerUser: RequestHandler = (req, res) => {
  res.status(201).json({ message: "User successfully registered" });
};

// export const loginUser = (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if (email === "admin@admin.com" && password === "123456") {
//     const token = jwt.sign({ email }, "mi_secreto", { expiresIn: "1h" });
//     return res.json({ token });
//   }

//   return res.status(401).json({ error: "Credenciales inválidas" });
// };
