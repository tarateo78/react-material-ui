import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

const Modifica = () => {
  const location = useLocation();
  const rifId = location.state;

  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const [ora, setOra] = useState(null);
  const [causale, setCausale] = useState(null);

  const timbrata = { id, data, ora, causale };

  const [staAggiornando, setStaAggiornando] = useState(false);

  const { dati, isPending, error } = useFetch(
    "http://tarateo.altervista.org/biagiometro/api/presenze/read.php?id=" +
      rifId
  );

  const [open, setOpen] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDeleteItem = () => {
    setOpen(false);
    fetch(
      "https://tarateo.altervista.org/biagiometro/api/presenze/delete.php",
      {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(timbrata),
      }
    ).then((res) => {
      setStaAggiornando(false);
      navigate("/");
    });
  };

  const handleAnnulla = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStaAggiornando(true);

    // setIsPending(true);

    fetch(
      "https://tarateo.altervista.org/biagiometro/api/presenze/update.php",
      {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(timbrata),
      }
    ).then((res) => {
      setStaAggiornando(false);
      navigate("/");
    });
  };

  useEffect(() => {
    if (dati) {
      setId(dati.records[0].id);
      setData(dati.records[0].data);
      setOra(dati.records[0].ora);
      setCausale(dati.records[0].causale);
    }
  }, [dati]);

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        className={"titoloPagina"}
        sx={{ marginTop: 9, marginBottom: 2 }}
      >
        {"Modifica timbratura"}
      </Typography>
      {dati && (
        <>
          <Box marginLeft={4} marginRight={4}>
            <Box fullWidth sx={{ textAlign: "right" }}>
              <IconButton size="small" onClick={handleClickOpenDialog}>
                <DeleteIcon color="warning" />
              </IconButton>
            </Box>
            <Dialog
              open={open}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Cancellare la timbratura?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  La cancellazione dellla timbratura è irreversibile.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Annulla</Button>
                <Button onClick={handleDeleteItem} autoFocus>
                  Cancella
                </Button>
              </DialogActions>
            </Dialog>
            <form onSubmit={handleSubmit}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                  type="date"
                  id="data"
                  label="Data"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={data}
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
                  value={ora}
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
                  <MenuItem key="2" value={"Uscita"}>
                    Uscita
                  </MenuItem>
                  <MenuItem key="3" value={"Uscita Missione"}>
                    Uscita Missione
                  </MenuItem>
                  <MenuItem key="4" value={"Uscita Assemblea"}>
                    Uscita Assemblea
                  </MenuItem>
                </Select>
                {!staAggiornando && (
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
                {staAggiornando && (
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
      )}
    </>
  );
};

export default Modifica;
