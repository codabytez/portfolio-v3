import "./App.css";
// import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="text-slate-600 bg-gray-200 dark:bg-gray-900 max-w-screen-2xl mx-auto">
      <Navbar />
      <Hero />
      <Tech />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
