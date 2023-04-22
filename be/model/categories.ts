import { timeStamp } from "console";
import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  sub_category: {
    type: [String],
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const category = model("Category", categorySchema);

export default category;
