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
  }).min(1),
  description: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).min(1),
  paymentTerms: Z.number({
    required_error: "this field is required",
    invalid_type_error: "must be a number",
  }).min(1),
  clientName: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).min(1),
  clientEmail: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).email({ message: "must be a email format" }),
  senderAddress: Z.object({
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
  }),
  clientAddress: Z.object({
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1),
  }),
  items: Z.array(
    Z.object({
      name: Z.string({
        required_error: "this field is required",
        invalid_type_error: "must be a string",
      }).min(1),
      quantity: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }).min(1),
      price: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }).min(1),
    })
  ),
});

export default schema;
