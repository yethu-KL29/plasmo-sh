import { useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar";
function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
                   
      <Navbar/>
      <Home />
    </div>
  )
}

export default IndexPopup
