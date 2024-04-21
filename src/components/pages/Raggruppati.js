// import ListaTimbrature from "./ListaTimbrature";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TabellaGruppi from "../TabellaGruppi";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import Footer from "../Footer";

const Raggruppati = () => {
  const { dati, isPending, error } = useFetch(
    "https://matteotarabini.altervista.org/api/timbrature/presenze/read.php"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {dati && (
        <>
          <Typography
            variant="h5"
            align="center"
            sx={{ marginTop: 9, marginBottom: 2 }}
          >
            {"Raggruppati"}
          </Typography>

          <TabellaGruppi dati={dati.records} />
        </>
      )}
      <Footer />
      <Link to={"/aggiungi"}>
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

export default Raggruppati;
