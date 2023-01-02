import "./App.css";
import Category from "./components/Category";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <Home />
    </div>
  );
}

export default App;
