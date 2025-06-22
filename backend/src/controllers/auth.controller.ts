import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ message: "Email already registered" });
      return;
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error registering user" });
  }
};

// export const loginUser = (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if (email === "admin@admin.com" && password === "123456") {
//     const token = jwt.sign({ email }, "mi_secreto", { expiresIn: "1h" });
//     return res.json({ token });
//   }

//   return res.status(401).json({ error: "Credenciales inválidas" });
// };
