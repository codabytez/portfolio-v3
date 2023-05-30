import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tech />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
