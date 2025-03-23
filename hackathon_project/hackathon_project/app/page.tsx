import Image from "next/image";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <>

      <div>
      <>
      <Navbar />
      </>
    </div>

<div>
    <head>

    <link rel="stylesheet" href="style.css"></link>
    <title> BNBJI Financing</title>
    
    </head>
</div>

    <body>
      <form>

      <div>
      <p> Login</p>
      <label htmlFor="user">Username:</label>
      <input type="text" id="user" placeholder=" Please Type Here" required/>
      </div>

      <div>
      <label htmlFor="pass">Password:</label>
      <input type="text" id="pass" placeholder=" Please Type Here" required/>
      </div>

      <div>
      <p><label htmlFor="submit">Submit</label></p>
      <input type="button" id="submit"/>
      </div>

      <div>
      <p>Don't have an account? <label htmlFor="create">Create User</label></p>
      <input type="button" id="create"/>
      </div>

      <div>
      <label htmlFor="forgot">Forgot Password</label>
      <input type="button" id="forgot"/>
      </div>
      
      </form>
    </body>

    </>

  )

}
