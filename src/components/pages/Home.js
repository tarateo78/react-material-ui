// import ListaTimbrature from "./ListaTimbrature";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TabellaTimbrature from "../TabellaTimbrature";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Nav from "../Nav";

import Footer from "../Footer";

const Home = ({ pages }) => {
  const { dati, isPending, error, cambiando, cazzo } = useFetch(
    "https://matteotarabini.altervista.org/api/timbrature/presenze/read.php"
  );

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

          <TabellaTimbrature dati={dati.records} />
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
