export default function Page() {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form action="/signup" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="checking">Checking Account Number</label>
        <input type="text" id="checking" name="checking" required />

        <label htmlFor="savings">Savings Account Number</label>
        <input type="text" id="savings" name="savings" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
