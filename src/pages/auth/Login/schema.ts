import * as yup from "yup";

const required = "Campo obrigatório";

export const authSchema = yup.object({
  email: yup.string().email().required(required),
  password: yup.string().required(required),
});

export type IAuthSchema = yup.InferType<typeof authSchema>;
