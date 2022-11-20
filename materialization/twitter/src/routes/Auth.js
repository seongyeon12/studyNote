import { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

return (
    <div>
    <form>
      <input type="text" 
      placeholder="email" required 
      value={email}
      />
      <input type="password" 
      placeholder="Password" required 
      value={password}
      />
      <input type="submit" value="Log In" />
    </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  </div>
  )
}
export default Auth