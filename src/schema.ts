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
  }).min(1, "this field is required"),
  description: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).min(1, "this field is required"),
  paymentTerms: Z.number({
    required_error: "this field is required",
    invalid_type_error: "must be a number",
  }).min(1, "this field is required"),
  clientName: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).min(1, "this field is required"),
  clientEmail: Z.string({
    required_error: "this field is required",
    invalid_type_error: "must be a string",
  }).email({ message: "must be a email format" }),
  senderAddress: Z.object({
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "this field is required"),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "city is required"),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "post code is required"),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "country field is required"),
  }),
  clientAddress: Z.object({
    street: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "this field is required"),
    city: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "city field is required"),
    postCode: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "post code field is required"),
    country: Z.string({
      required_error: "this field is required",
      invalid_type_error: "must be a string",
    }).min(1, "country field is required"),
  }),
  items: Z.array(
    Z.object({
      name: Z.string({
        required_error: "this field is required",
        invalid_type_error: "must be a string",
      }).min(1, "this field is required"),
      quantity: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }).min(1, "this field is required"),
      price: Z.number({
        required_error: "this field is required",
        invalid_type_error: "must be a number",
      }).min(1, "this field is required"),
    })
  ),
});

export default schema;
