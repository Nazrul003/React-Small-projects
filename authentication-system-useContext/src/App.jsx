import React from "react"
import { AuthProvider } from "./Component/AuthProvider"
import Login from "./Component/login"
import Navbar from "./Component/Navbar"
import Dashboard from "./Component/Dashboard"

function App() {
  
  return(
    <AuthProvider>
      <div className="mx-auto my-32 w-[350px] shadow-black shadow-md bg-gray-200 p-10 rounded-md h-fit">
      
      <Login />
      <Navbar />
      <Dashboard />
      </div>
    </AuthProvider>
  )
}

export default App
