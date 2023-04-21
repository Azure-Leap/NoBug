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
  // created_at: Date;
  // updated_at: Date;
}
const freelancerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Хэрэглэгчийн нэрийг заавал бөглөнө үү!!!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Хэрэглэгчийн emailийг заавал бөглөнө үү!!!"],
    },
    password: {
      type: String,
      required: [true, "Хэрэглэгчийн password ийг заавал бөглөнө үү!!!"],
    },
    avatar: {
      type: String,
    },
    job_title: {
      type: String,
      ENUM: ["Client", "Freelancer"],
    },
    skills: {
      type: [],
    },
  },
  { timestamps: true }
);

const freelancer = model("Freelancer", freelancerSchema);

export default freelancer;
