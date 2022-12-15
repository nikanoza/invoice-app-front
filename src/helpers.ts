export const dateTransformer = (date: string): string => {
  const createdDate = new Date(date);
  const [dueWeekday, dueMonth, dueDay, dueYear] = createdDate
    .toDateString()
    .split(" ");
  return `${dueDay} ${dueMonth} ${dueYear}`;
};
