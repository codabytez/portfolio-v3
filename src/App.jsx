import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { createContext, useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ThemeContext = createContext(null);



function App() {

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`sm:overflow-x-hidden ${darkMode && 'dark'} `}>
      <div className=" flex m-auto justify-end max-w-[1400px] pr-4">
        <div className="fixed z-[50] bottom-[5%]">
          <DarkModeSwitch
            className="flex justify-end items-end "
            checked={darkMode}
            onChange={setDarkMode}
            size={50}
          />
        </div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;