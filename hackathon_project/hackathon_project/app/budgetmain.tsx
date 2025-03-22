import Head from "next/head";

export default function BudgetingPage() {
  return (
    <>
      <Head>
        <title>Budgeting Screen</title>

        <meta charSet="UTF-8" />

        <link rel="stylesheet" href="/style.css" />
      </Head>

      <div className="container">
        <button className="help-btn">How to budget &amp; save</button>
        
        <div className="limits">
          <h2>Limits</h2>
          <select>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div className="spending-goal">

          <label htmlFor="spend">How much do you want to spend?</label>
          <input type="number" id="spend" placeholder="$0.00" />

        </div>

        <div className="footer-nav">

          <button>Home</button>
          <button>Add/Sub</button>
          <button>Stocks</button>
          <button>Budgeting</button>

        </div>
      </div>
    </>
  );
}
