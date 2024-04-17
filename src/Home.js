// import ListaTimbrature from "./ListaTimbrature";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TabellaTimbrature from "./TabellaTimbrature";
import useFetch from "./useFetch";

const Home = () => {
  const { dati, isPending, error } = useFetch(
    "http://tarateo.altervista.org/biagiometro/api/presenze/read.php"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {dati && <TabellaTimbrature dati={dati.records} title="Timbrature" />}
      {/* {dati && (
        <ListaTimbrature
          dati={dati.records}
          title="Timbrature:"
          handleDelete="handleDelete"
        />
      )} */}
      <Fab
        color="primary"
        aria-label="add"
        size="large"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
