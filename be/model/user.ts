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
const userSchema = new Schema<IUser>({
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
  role: {
    type: String,
    ENUM: ["Client", "Freelancer"],
  },
  phoneNumber: {
    type: String,
    default: "60020202",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const user = model("User", userSchema);

export default user;
