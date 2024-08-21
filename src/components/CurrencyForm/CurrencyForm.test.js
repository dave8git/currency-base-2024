import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';

describe('Component currencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });

  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
  ];

  testCases.forEach(({ amount, from, to }) => {
    it(`should run action callback with proper data on form submit (amount: ${amount}, from: ${from}, to: ${to})`, () => {
      const action = jest.fn();
      render(<CurrencyForm action={action} />);

      const amountField = screen.getByTestId('amount');
      const fromField = screen.getByTestId('from-select');
      const toField = screen.getByTestId('to-select');
      const button = screen.getByTestId('convert-button');

      fireEvent.change(amountField, { target: { value: amount } });
      fireEvent.change(fromField, { target: { value: from } });
      fireEvent.change(toField, { target: { value: to } });
      fireEvent.click(button);

      expect(action).toHaveBeenCalledWith({ amount, from, to });
    });
  });
});
