import * as React from "react";
import Table from "@mui/material/Table";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TabellaGruppi({ dati }) {
  // console.log(dati);

  // ITERA TUTTE LE TIMBRATURE E CREA UN ARRAY DI GRUPPI DI TIMBRATURE UGUALI PER DATA
  let raccolta = [];
  let gruppo = [];
  let dataTemp = false;
  for (let [key, value] of Object.entries(dati)) {
    if (value.data === dataTemp) {
      gruppo.push(value);
    } else {
      if (dataTemp) {
        raccolta.push(gruppo);
        gruppo = [];
      }
      gruppo.push(value);
      dataTemp = value.data;
    }
  }
  raccolta.push(gruppo);

  // console.log(raccolta);

  let primo = true;
  return (
    <>
      {raccolta.map((gruppo) => (
        <Accordion key={Math.random()} defaultExpanded={primo}>
          {(primo = false)}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "#ccc" }}
          >
            <Typography>{gruppo[0].data}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="simple table">
                <TableBody>
                  {gruppo.map((obj) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:nth-of-type(even)": {
                          backgroundColor: "#EEE",
                        },
                      }}
                    >
                      <TableCell align="center">{obj.ora}</TableCell>
                      <TableCell align="center">{obj.causale}</TableCell>
                      <TableCell align="center">
                        {/* {<Cancella id={row.id} />} */}
                        <Link
                          id={obj.id}
                          to={"/modifica"}
                          state={obj.id}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <IconButton size="small">
                            <EditIcon />
                          </IconButton>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
