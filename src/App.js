import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Footex from "./components/Footex";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
     
      <Navbar></Navbar>
      <Main></Main>
      <Footex></Footex>
    </div>
  );
}

export default App;