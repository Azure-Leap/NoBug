import { Request, Response, NextFunction } from "express";
import User from "../model/user";

const addPortfolio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { data }: any = req.body;

  try {
    const user = await User.findById(id);

    if (user) {
      user?.freelancer?.portfolio.push(data);

      await user?.save();
      console.log(data);
    } else {
      res.status(400).json({
        success: false,
        message: "iim id tai user oldsongui",
      });
    }

    res.status(201).json({
      success: true,
      message: "portfolio amjilttai nemegdlee",
    });
  } catch (error) {
    next(error);
  }
};

export { addPortfolio };
