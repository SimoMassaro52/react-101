import "./styles/App.css";
import { Header } from "./components/Header";
import { Meme } from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
