import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Aggiungi from "./components/pages/Aggiungi";
import Info from "./components/pages/Info";
import Modifica from "./components/pages/Modifica";
import { Container } from "@mui/material";

function App() {
  const pages = [
    { name: "Home", pageURL: "/", icon: <HomeIcon /> },
    { name: "Aggiungi", pageURL: "/aggiungi", icon: <AddBoxIcon /> },
    { name: "Info", pageURL: "/info", icon: <InfoIcon /> },
  ];

  return (
    <BrowserRouter basename="/biagiometro">
      <div className="App">
        <Container
          maxWidth="sm"
          sx={{ backgroundColor: "white", padding: "30px 0" }}
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Home pages={pages} />} />
              <Route path="/aggiungi" element={<Aggiungi pages={pages} />} />
              <Route path="/modifica" element={<Modifica pages={pages} />} />
              <Route path="/info" element={<Info pages={pages} />} />
              {/* <Route path="/timbratura/:id" element={<DettaglioTimbratura />} /> */}
            </Routes>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
