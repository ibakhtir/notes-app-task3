import { object, string, number, array, bool } from "yup";

const noteSchema = object({
  title: string().required(),
  body: string().required(),
  category: string().required(),
  createdAt: number().required(),
  dates: array().required(),
  isArchived: bool().required(),
});

export default noteSchema;
