// import ListaTimbrature from "./ListaTimbrature";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TabellaTimbrature from "../TabellaTimbrature";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const handleCreate = () => {
  console.log("create");
};
const Home = () => {
  const { dati, isPending, error } = useFetch(
    "http://tarateo.altervista.org/biagiometro/api/presenze/read.php"
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
            {"Timbrature"}
          </Typography>
          <TabellaTimbrature dati={dati.records} />
        </>
      )}
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
