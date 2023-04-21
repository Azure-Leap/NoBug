import { Schema, model, } from "mongoose";

interface IService {
  title: string;
  description: string;
  skills: [];
  budget: number;
  deadline: Date;
  client_id:{
    type: any,
  };
}

const serviceSchema = new Schema<IService>({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  skills:{
    type: [],
    required:true
  },
  budget:{
    type: Number,
    required: true
  },
  deadline:{
    type: Date,
    required: true
  },
  client_id:{
    type: Schema.Types.ObjectId,
    ref: "Client"
  }
}, {timestamps : true});

const service = model("Service", serviceSchema);

export default service;
