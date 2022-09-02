export default function formatCurrency(value) {
  const formattedValue = parseFloat(value).toFixed(2);
  return `$${formattedValue}`;
}

export function validateInput(input) {
  const reg = new RegExp(/^\d+$/);
  if (reg.test(input)) {
    return input;
  } else {
    return '';
  }
}

export function calculateTotal(price, quantity) {
  const total = price * quantity;
  const VAT = total + price / 1.2;
  const totalWithVat = price * quantity + VAT;
  const prices = {
    total: total,
    totalWithVat: totalWithVat,
  };
  return prices;
}

export function calculateTotalCost(item1, item2, item3) {
  const total = item1 + item2 + item3;
  return total;
}
