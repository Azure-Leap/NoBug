import { Schema, model } from "mongoose";

interface IUser {
  name: String;
  email: String;
  password: String;
  avatar: String;
  role: String;
  phoneNumber: String;
  createdAt: Date;
}
const userSchema = new Schema(
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
    role: {
      type: String,
      ENUM: ["Client", "Freelancer"],
    },
    freelancer: {
      type: {
        phone: {
          type: String,
        },
        avatar: {
          type: String,
        },
        job_title: {
          type: String,
        },
        skills: {
          type: [],
        },
        rating: {
          type: Number,
        },
        hourly_rate: {
          type: Number,
        },
        availability: {
          type: String,
        },
        worked_projects: {
          type: [],
        },
        region: {
          type: String,
        },
        Service: [
          {
            type: Schema.Types.ObjectId,
            ref: "Service",
          },
        ],
      },
    },
    client: {
      type: {
        company_name: { String },
      },
    },
  },
  { timestamps: true }
);

const user = model("User", userSchema);

export default user;
