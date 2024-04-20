import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Nav from "./Nav";
import Home from "./components/Home";
import Aggiungi from "./components/Aggiungi";
import About from "./components/About";
import Modifica from "./components/Modifica";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
// import DettaglioTimbratura from "./DettaglioTimbratura";

function App() {
  const pages = [
    { name: "Home", pageURL: "/", icon: <HomeIcon /> },
    { name: "Aggiungi", pageURL: "aggiungi", icon: <AddBoxIcon /> },
    { name: "About", pageURL: "about", icon: <InfoIcon /> },
  ];

  return (
    <BrowserRouter basename="/biagiometro">
      <div className="App">
        <Nav pages={pages} />
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aggiungi" element={<Aggiungi />} />
            <Route path="/modifica" element={<Modifica />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/timbratura/:id" element={<DettaglioTimbratura />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
