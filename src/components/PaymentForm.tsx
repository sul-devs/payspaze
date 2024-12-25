const PaymentForm = () => {
  return (
    <form id="payment-form">
      <h2>Make A Payment</h2>
      <ul className="no-bullets">
        <li>
          <label htmlFor="emailTo">Email To: (*)</label>
          <input
            id="emailTo"
            type="email"
            placeholder="example@email.com"
            name="emailTo"
            required
          />
        </li>
        <li>
          <label htmlFor="currency">Currency: (*)</label>
          <select name="currency" id="currency" required>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>
        </li>
        <li>
          <label htmlFor="amount">Amount: (*)</label>
          <input
            id="amount"
            type="number"
            placeholder="99"
            name="amount"
            required
          />
        </li>
        <li>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Add any notes regarding your payment here."
          ></textarea>
        </li>
      </ul>
      <button>Cancel</button>
      <button type="submit">Pay</button>
    </form>
  );
};
export default PaymentForm;
