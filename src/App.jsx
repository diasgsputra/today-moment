import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import TodayMoment from './TodayMoment'
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Pricelist from "./components/Pricelist";
// import Contact from "./components/Contact";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodayMoment />
    </div>
  )
}

export default App
