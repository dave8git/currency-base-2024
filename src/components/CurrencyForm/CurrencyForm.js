import { useState } from 'react';
import TextInput from './../TextInput/TextInput';
import Select from './../Select/Select';
import Button from './../Button/Button';
import styles from './CurrencyForm.module.scss';

const CurrencyForm = ({ action }) => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('PLN');
  const [to, setTo] = useState('PLN');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ amount, from, to });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Amount:</span>
        <input
          data-testid="amount"
          className={styles.input}
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        <span>From</span>
        <select
          data-testid="from-select"
          className={styles.select}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </select>
      </label>
      <label>
        <span>To</span>
        <select
          data-testid="to-select"
          className={styles.select}
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </select>
      </label>
      <button data-testid="convert-button" className={styles.button}>
        Convert
      </button>
    </form>
  );
};

export default CurrencyForm;
