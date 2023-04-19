import { Schema, model } from "mongoose";

interface IFreelancer {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  job_title: string;
  skills: string[];
  hourly_rate: number;
  availability: string;
  created_at: Date;
  updated_at: Date;
}
const freelancerSchema = new Schema<IFreelancer>({});

const freelancer = model("Freelancer", freelancerSchema);

export default freelancer;
