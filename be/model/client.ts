import { Schema, model } from "mongoose";

interface IClient {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  skills: string[];
  company_name: string;
  industry: string;
  created_at: Date;
  updated_at: Date;
}

const clientSchema = new Schema<IClient>({});

const client = model("Client", clientSchema);

export default client;
