import { Schema, model } from "mongoose";

interface IService {
  id: number;
  client_id: number;
  title: string;
  description: string;
  skills_required: string[];
  budget: number;
  deadline: Date;
  created_at: Date;
  updated_at: Date;
}

const serviceSchema = new Schema<IService>({});

const service = model("service", serviceSchema);

export default service;
