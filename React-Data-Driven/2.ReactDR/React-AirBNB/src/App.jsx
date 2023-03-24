//In this project we are going to create an AirBNB clone with dynamic data

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
