import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Live from "./components/Project/Live";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="text-slate-600 bg-gray-200">
      <Navbar />
      <Hero />
      <Tech />
      <Project />
    </div>
  );
}

export default App;
