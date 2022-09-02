import formatCurrency from './../Utils';
import { validateInput, calculateTotal, calculateTotalCost } from './../Utils';

describe('Utils functions return correct values', () => {
  test('formatCurrency function formats currency with $ and to 2 decimal places', () => {
    const value = 99.0;

    const formattedValue = formatCurrency(value);

    expect(formattedValue).toBe('$99.00');
  });

  test('validateInput function returns input only if input is numerical', () => {
    const input = 3;

    const formattedValue = validateInput(input);

    expect(formattedValue).toBe(3);
  });

  test('validateInput function returns empty string if input is not numerical ', () => {
    const input = 'four';

    const formattedValue = validateInput(input);

    expect(formattedValue).toBe('');
  });

  test('calculateTotal function returns total of price * quantity', () => {
    const price = 4.99;
    const quantity = 2;

    const total = calculateTotal(price, quantity).total;
    const totalWithVat = calculateTotal(price, quantity).totalWithVat.toFixed(2);
    const formattedTotalWithVat = parseFloat(totalWithVat);
    console.log(totalWithVat, total);

    expect(total).toBe(9.98);
    expect(formattedTotalWithVat).toBe(24.12);
  });

  test('calculateTotalCost function returns total sum of all items', () => {
    const item1 = 4.99;
    const item2 = 2.00;
    const item3 = 3.00;

    const formattedValue = calculateTotalCost(item1, item2, item3);

    expect(formattedValue).toBe(9.99);
  });
});
