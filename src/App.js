import ButtonAppBar from "./ButtonAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Home from "./Home";
// import Create from "./Create";
// import DettaglioTimbratura from "./DettaglioTimbratura";

function App() {
  return (
    <BrowserRouter basename="/react-material-ui">
      <div className="App">
        <ButtonAppBar />
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/create" element={<Create />} /> */}
            {/* <Route path="/timbratura/:id" element={<DettaglioTimbratura />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
