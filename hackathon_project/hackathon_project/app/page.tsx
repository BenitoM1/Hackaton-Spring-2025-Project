"use client"

import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [showBudgeting, setShowBudgeting] = useState(false)
  const [showHome, setShowHome] = useState(false)
  const [showBudgetHow, setShowBudgetHow] = useState(false)
  const [showCreateUser, setShowCreateUser] = useState(false)

  const toggleBudget = () => {
    setShowHome(false)
    setShowBudgetHow(false)
    setShowBudgeting(true)
  }

  const toggleHome = () => {
    setShowBudgeting(false)
    setShowBudgetHow(false)
    setShowHome(true)
  }

  const toggleBudgetHow = () => {
    setShowBudgeting(false)
    setShowHome(false)
    setShowCreateUser(false)
    setShowBudgetHow(true)


  }

  const toggleCreateUser = () => {
    setShowBudgeting(false)
    setShowHome(false)
    setShowBudgetHow(false)
    setShowCreateUser(true)
  
  }

  return (
    <div>
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
        <div>
          <button onClick={toggleHome} className="button-class"> Home </button>
        </div>

        <div>
          <Link href="/addsub" className="button-class">Add/Sub</Link>
        </div>

        <div>
          <Link href="/stocks" className="button-class">Stocks</Link>
        </div>

        <div>
          <button onClick={toggleBudget} className="button-class"> Budgeting </button>
        </div>
      </nav>

      <head>
        <title>BNBJI Financing</title>
      </head>

      <main className="main">
        {!showBudgeting && !showHome && !showBudgetHow && !showCreateUser ? (
          <form>
            <div>
              <label htmlFor="user">Username:</label>
              <input type="text" id="user" placeholder=" Please Type Here" />
            </div>

            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" id="pass" placeholder=" Please Type Here" />
            </div>

            <div>
              <button onClick={toggleCreateUser} className="button-class"> Create User </button>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        ) : showBudgeting ? (
          <div className="container">
            <h1 className="text-2xl font-bold">Budgeting Page</h1>

            <button onClick={toggleBudgetHow} className="button-class"> How To Budget & Save </button>

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
          </div>
        ): showHome ? (
          <body>
            
          </body>

        ): showBudgetHow ?(
            <div>
            <header>Budget Guide</header>
            <h1>It Looks Like You Might Need Help Budgeting.</h1>

            <h1>Here is a good option for safety.</h1>
            <a> https://shorturl.at/NIZOD</a>

            <h1>Looking for something user friendly?</h1>
            <a>- https://shorturl.at/nYAw0</a>

            <h1>Maybe you just want the best all around!</h1>
            <a>- https://shorturl.at/TWQ2T</a>
            </div>
        ): showCreateUser ? (
          <div>
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
          </div>
        ): null}
      </main>
    </div>
  );
}
