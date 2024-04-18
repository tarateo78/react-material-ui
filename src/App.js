import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Nav from "./Nav";
import Home from "./components/Home";
import Create from "./components/Create";
import About from "./components/About";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
// import DettaglioTimbratura from "./DettaglioTimbratura";

function App() {
  const pages = [
    { name: "Home", pageURL: "/", icon: <HomeIcon /> },
    { name: "Create", pageURL: "create", icon: <AddBoxIcon /> },
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
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/timbratura/:id" element={<DettaglioTimbratura />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
