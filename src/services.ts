import axios from "axios";
import { NewInvoice } from "types";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getInvoices = () => {
  return instance.get("/invoices");
};

export const getInvoice = (id: string) => {
  return instance.get("/invoices/" + id);
};

export const addInvoice = (invoice: NewInvoice) => {
  return instance.post("/invoices", invoice);
};

export const updateInvoice = (invoice: NewInvoice, id: string) => {
  return instance.put("/invoices/" + id, invoice);
};

export const removeInvoice = (id: string) => {
  return instance.delete("/invoices/" + id);
};
