export const getDiscountedPrice = (
  price: number,
  discountPer: number,
): number => {
  return price * (discountPer / 100);
};

export const getFormattedPrice = (number: number): string => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return formattedPrice;
};
