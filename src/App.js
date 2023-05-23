import {useState} from "react"
import Header from "./components/Header";

function App() {
  const[darkMode,setDarkMode]=useState(false)
  return (
    <div> 
      <Header/>
    </div>
      );
}

export default App
