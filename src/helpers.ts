import { FormValues } from "schema";
import { NewInvoice } from "types";

export const dateTransformer = (date: string): string => {
  const createdDate = new Date(date);
  const [dueWeekday, dueMonth, dueDay, dueYear] = createdDate
    .toDateString()
    .split(" ");
  return `${dueDay} ${dueMonth} ${dueYear}`;
};

export const requestBodyTransformer = (
  invoice: FormValues,
  status: string = "draft"
): NewInvoice => {
  const {
    createdAt,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    items,
  } = invoice;

  const paymentDate = new Date(createdAt);
  const day = paymentDate.getDate();
  paymentDate.setDate(day + paymentTerms);
  const paymentDue = `${paymentDate.getFullYear()}-${
    paymentDate.getMonth() < 9
      ? "0" + (paymentDate.getMonth() + 1)
      : paymentDate.getMonth() + 1
  }-${
    paymentDate.getDate() < 10
      ? "0" + paymentDate.getDate()
      : paymentDate.getDate()
  }`;

  const transformItems = items.map((item) => {
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.price * item.quantity,
    };
  });

  const total = transformItems.reduce((a, b) => a + b.total, 0);

  return {
    createdAt,
    description,
    paymentTerms,
    paymentDue,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    status: status,
    items: transformItems,
    total,
  };
};
