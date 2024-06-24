export const formatCurrency = (value: number, discount?: number) => {
  if (discount)
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value - (value * discount) / 100);
  else
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
};

export const getWithinHours = (hours: number) => {
  const now = new Date();
  const withinHours = new Date(now.getTime() - hours * 60 * 60 * 1000);
  return withinHours.toISOString();
};
