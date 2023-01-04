import * as Z from "zod";
import { ZodTypeAny } from "zod";

interface Address {
  street: ZodTypeAny;
  city: ZodTypeAny;
  postCode: ZodTypeAny;
  country: ZodTypeAny;
  [key: string]: any;
}

interface Item {
  name: ZodTypeAny;
  quantity: ZodTypeAny;
  price: ZodTypeAny;
  total: ZodTypeAny;
  [key: string]: any;
}

export interface FormValues {
  createdAt: ZodTypeAny;
  description: ZodTypeAny;
  paymentTerms: ZodTypeAny;
  clientName: ZodTypeAny;
  clientEmail: ZodTypeAny;
  senderAddress: Address;
  clientAddress: Address;
  items: ZodTypeAny;
  [key: string]: any;
}

const schema = Z.object<FormValues>({
  createdAt: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }),
  description: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }),
  paymentTerms: Z.number({
    required_error: "this field is required",
    invalid_type_error: "must be a number",
  }),
  clientName: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }),
  clientEmail: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).email({ message: "must be a email format" }),
  senderAddress: {
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
  },
  clientAddress: {
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }),
  },
  items: Z.array(
    Z.object<Item>({
      name: Z.string({
        required_error: "this field is required",
        invalid_type_error: "must be a string",
      }),
      quantity: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }),
      price: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }),
      total: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }),
    })
  ),
});

export default schema;
