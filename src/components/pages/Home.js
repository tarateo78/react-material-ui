// import ListaTimbrature from "./ListaTimbrature";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TabellaTimbrature from "../TabellaTimbrature";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Nav from "../Nav";
import TabellaGruppi from "../TabellaGruppi";

import Footer from "../Footer";
import { useState } from "react";

const Home = ({ pages }) => {
  const { dati, isPending, error, cambiando, cazzo } = useFetch(
    "https://matteotarabini.altervista.org/api/timbrature/presenze/read.php"
  );

  const [isGruppo, setIsGruppo] = useState(true);

  const handleGruppo = () => {
    setIsGruppo(!isGruppo);
  };

  return (
    <div className="home">
      <Nav pages={pages} />

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {dati && (
        <>
          <Typography
            variant="h5"
            align="center"
            sx={{ marginTop: 9, marginBottom: 2 }}
          >
            {"Timbrature"}
          </Typography>
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <FormControlLabel
              control={<Switch checked={isGruppo} onChange={handleGruppo} />}
              label="Raggruppato"
            />
          </Box>

          {isGruppo && <TabellaGruppi dati={dati.records} />}
          {!isGruppo && <TabellaTimbrature dati={dati.records} />}
        </>
      )}
      <Box sx={{ textAlign: "center", margin: "15px 0" }}>
        <Typography>Matteo Tarabini</Typography>
      </Box>
      {/* {dati && (
        <ListaTimbrature
          dati={dati.records}
          title="Timbrature:"
          handleDelete="handleDelete"
        />
      )} */}
      <Link to={"aggiungi"}>
        <Fab
          color="primary"
          aria-label="add"
          size="large"
          sx={{ position: "fixed", bottom: 20, right: 20 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default Home;
