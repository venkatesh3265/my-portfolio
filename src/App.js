import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBg from "./components/ParticlesBg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./style.css";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/project" component={Projects} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/resume" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
