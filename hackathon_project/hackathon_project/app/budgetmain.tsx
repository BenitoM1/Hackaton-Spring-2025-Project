import Link from 'next/link';

export default function BudgetMain() {
  return (
    <div className="container p-4">
      <button className="help-btn">How to budget &amp; save</button>

      <div className="limits mt-4">
        <h2>Limits</h2>
        <select>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="year">Year</option>
        </select>
      </div>s

      <div className="spending-goal mt-4">
        <label htmlFor="spend">How much do you want to spend?</label>
        <input type="number" id="spend" placeholder="$0.00" className="border p-2" />
      </div>

      <div className="footer-nav flex gap-2 mt-4">
        <Link href="/" className="button-class">Home</Link>
        <Link href="/addsub" className="button-class">Add/Sub</Link>
        <Link href="/stocks" className="button-class">Stocks</Link>
        <Link href="/budgetmain" className="button-class">Budgeting</Link>
      </div>
    </div>
  );
}
