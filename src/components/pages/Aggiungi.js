import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const doppiaCifra = (n) => {
  return n < 10 ? "0" + n.toString() : n.toString();
};

const Aggiungi = () => {
  const navigate = useNavigate();

  let adesso = new Date();
  const oraAttuale = adesso.getHours() + ":" + adesso.getMinutes();

  const [data, setData] = useState(
    adesso.getFullYear() +
      "-" +
      doppiaCifra(adesso.getMonth() + 1) +
      "-" +
      doppiaCifra(adesso.getDate())
  );
  const [ora, setOra] = useState(
    doppiaCifra(adesso.getHours()) + ":" + doppiaCifra(adesso.getMinutes())
  );

  const [causale, setCausale] = useState("Entrata");

  const [isPending, setIsPending] = useState(false);

  const hanleSubmit = (e) => {
    e.preventDefault();

    const timbrata = { data, ora, causale };
    // console.log(timbrata);

    // India che l'operazione è in corso
    setIsPending(true);

    fetch(
      "https://tarateo.altervista.org/biagiometro/api/presenze/create.php",
      {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(timbrata),
      }
    ).then((res) => {
      setIsPending(false);
      navigate("/");
    });
  };

  const handleAnnulla = () => {
    navigate("/");
  };

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        className={"titoloPagina"}
        sx={{ marginTop: 9, marginBottom: 2 }}
      >
        {"Nuova timbratura"}
      </Typography>
      <Box marginLeft={4} marginRight={4}>
        <form onSubmit={hanleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              key={"data"}
              type="date"
              id="data"
              label="Data"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              key={"ora"}
              type="time"
              id="ora"
              label="Ora"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={ora}
              onChange={(e) => {
                setOra(e.target.value);
              }}
              sx={{ mb: 2 }}
            />
            <Select
              key={"causale"}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              color="error"
              value={causale}
              label="Causale"
              fullWidth
              onChange={(e) => {
                setCausale(e.target.value);
              }}
              sx={{ mb: 4 }}
              // onChange={handleChange}
            >
              <MenuItem key="1" value={"Entrata"}>
                Entrata
              </MenuItem>

              <MenuItem key="2" value={"Uscita Pranzo"}>
                Uscita Pranzo
              </MenuItem>

              <MenuItem key="3" value={"Rientro Pranzo"}>
                Rientro Pranzo
              </MenuItem>

              <MenuItem key="4" value={"Rientro Pranzo"}>
                Rientro Pranzo
              </MenuItem>

              <MenuItem key="5" value={"Uscita"}>
                Uscita
              </MenuItem>

              <MenuItem key="6" value={"Uscita Missione"}>
                Uscita Missione
              </MenuItem>

              <MenuItem key="7" value={"Rientro Missione"}>
                Rientro Missione
              </MenuItem>
            </Select>
            {!isPending && (
              <>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleAnnulla}
                >
                  ANNULLA
                </Button>
                <Button variant="contained" color="success" type="submit">
                  CONFERMA
                </Button>
              </>
            )}
            {isPending && (
              <Typography
                variant="h5"
                fullWidth
                align="center"
                sx={{ color: "gray" }}
              >
                Salvataggio in corso...
              </Typography>
            )}
          </LocalizationProvider>
        </form>
      </Box>
    </>
  );
};

export default Aggiungi;
