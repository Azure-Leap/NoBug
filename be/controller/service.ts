import { Request, Response, NextFunction } from "express";
import Service from "../model/services";

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const service = await Service.find();

    res.status(201).json({
      success: true,
      message: "Service мэдээлэл олдлоо.",
      service,
    });
  } catch (error) {
    next(error);
  }
};

const getService = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const service = await Service.findById(id);
  try {
    res
      .status(201)
      .json({ success: true, message: "Service мэдээлэл олдлоо.", service });
  } catch (error) {
    next(error);
  }
};

const createService = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description, skills, budget, deadline, client_id } = req.body;

  try {
    if (!title || !description || !skills|| !budget || !deadline ) {
      res.status(201).json({
        success: false,
        message: "description, skills_required, budget, deadline, client_id хоосон байна.",
      });
    }
    const service = await Service.create({ title, description, skills, budget, deadline, client_id });
    res.status(201).json({
      success: true,
      message: "Шинэ сервис амжилттай үүслээ",
      service,
    });
  } catch (error) {
    next(error);
  }
};
const uptadeService = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, skills_required, budget, deadline, client_id } = req.body;
    const {id} = req.params
  
    try {
    //   if (!title || !description || !skills_required || !budget || !deadline ) {
    //     res.status(201).json({
    //       success: false,
    //       message: "description, skills_required, budget, deadline, client_id хоосон байна.",
    //     });
    //   }
      const service = await Service.findByIdAndUpdate(id,req.body);
      res.status(201).json({
        success: true,
        message: "Сервис амжилттай шинэчлэгдлээ.",
        service,
      });
    } catch (error) {
      next(error);
    }
};
  const deleteService = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, skills_required, budget, deadline, client_id } = req.body;
  
    try {
      if (!title || !description || !skills_required || !budget || !deadline || !client_id ) {
        res.status(201).json({
          success: false,
          message: "description, skills_required, budget, deadline, client_id хоосон байна.",
        });
      }
      const service = await Service.findByIdAndDelete({ title, description, skills_required, budget, deadline, client_id });
      res.status(201).json({
        success: true,
        message: "Сервис амжилттай устлаа.",
        service,
      });
    } catch (error) {
      next(error);
    }
};

export { getServices, getService, createService, uptadeService, deleteService };

