import { Request, Response, NextFunction } from "express";
import Freelancer from "../model/freelancer";

const getFreelancers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const freelancer = await Freelancer.find();

    res.status(201).json({
      success: true,
      message: "Freelancer мэдээлэл олдлоо.",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const getFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const freelancer = await Freelancer.findById(id);
  try {
    res.status(201).json({
      success: true,
      message: "Freelancer мэдээлэл олдлоо.",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const deleteFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const freelancer = await Freelancer.findByIdAndDelete(id);
  try {
    res.status(201).json({
      success: true,
      message: `${id} амжилттай устлаа`,
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

const createFreelancer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    email,
    name,
    password,
    avatar,
    job_title,
    skills,
    hourly_rate,
    availability,
  } = req.body;

  try {
    if (
      !email ||
      !name ||
      !password ||
      !job_title ||
      !skills ||
      !hourly_rate ||
      !availability
    ) {
      res.status(201).json({
        success: false,
        message: "email, name, password ali neg nihooson baina",
      });
    }
    const freelancer = await Freelancer.create({
      email,
      name,
      password,
      avatar,
      job_title,
      skills,
      hourly_rate,
      availability,
    });
    res.status(201).json({
      success: true,
      message: "шинэ хэрэглэгч амжилттай үүслээ",
      freelancer,
    });
  } catch (error) {
    next(error);
  }
};

export { getFreelancers, getFreelancer, createFreelancer, deleteFreelancer };
