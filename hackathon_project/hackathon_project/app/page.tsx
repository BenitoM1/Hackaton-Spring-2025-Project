import Image from "next/image";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <html>
      <div>
      <>
      <Navbar />
      </>
    </div>
    <head>
    <title> BNBJI Financing</title>
    </head>

    <body>
      <form>

      <div>
      <label htmlFor="user">Username:</label>
      <input type="text" id="user" placeholder=" Please Type Here"></input>
      </div>

      <div>
      <label htmlFor="pass">Password:</label>
      <input type="text" id="pass" placeholder=" Please Type Here"></input>
      </div>

      <div>
      <label htmlFor="create">Create User</label>
      <input type="button" id="create"></input>
      </div>

      <div>
      <label htmlFor="forgot">Forgot Password</label>
      <input type="button" id="forgot"></input>
      </div>
      
      </form>
    </body>

    </html>

  )

}
