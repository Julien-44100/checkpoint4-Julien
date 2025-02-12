import "./App.css";
import { Outlet } from "react-router-dom";
import Connexion from "./components/connexion/connxion";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Connexion />

      <Outlet />
    </div>
  );
}

export default App;
