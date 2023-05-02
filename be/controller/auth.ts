import { Request, Response, NextFunction } from "express";
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (await User.findOne({ email: req.body.email })) as any;

    if (!user) {
      res.status(200).json({ message: `email or password incorrect` });
    }

    const checkPass = bcrypt.compareSync(
      req.body.password,
      user.password.toString()
    );

    if (!checkPass) {
      res.status(200).json({ message: `email or password incorrect` });
    }

    const { _id, name, email, role }: any = user;

    const token = jwt.sign(
      { _id, name, email, role },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: 3600,
      }
    );

    res.status(200).json({ message: `Амжилттай нэвтэрлээ`, user, token });
  } catch (error) {
    next();
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, user });
  } catch (error) {
    next(error);
  }
};

export { register, login };
