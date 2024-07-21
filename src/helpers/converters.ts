export const formatCurrency = (
  value: number | null,
  discount?: number | null,
) => {
  if (discount && value)
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value - (value * discount) / 100);
  else
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value as number | bigint);
};

export const getWithinHours = (hours: number) => {
  const now = new Date();
  const withinHours = new Date(now.getTime() - hours * 60 * 60 * 1000);
  return withinHours.toISOString();
};
