import * as Z from "zod";

export type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type FormValues = {
  createdAt: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
};

const schema = Z.object({
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
  senderAddress: Z.object({
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
  }),
  clientAddress: Z.object({
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
  }),
  items: Z.array(
    Z.object({
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
