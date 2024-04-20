import * as React from "react";
import Table from "@mui/material/Table";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Cancella from "./Cancella";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function TabellaTimbrature({ dati }) {
  console.log(dati);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ccc" }}>
              <TableCell align="center">
                <b>Data</b>
              </TableCell>
              <TableCell align="center">
                <b>Ora</b>
              </TableCell>
              <TableCell align="center">
                <b>Causale</b>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dati.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(even)": {
                    backgroundColor: "#EEE",
                  },
                }}
              >
                <TableCell align="center" scope="row">
                  {row.data}
                </TableCell>
                <TableCell align="center">{row.ora}</TableCell>
                <TableCell align="center">{row.causale}</TableCell>
                <TableCell align="center">
                  {/* {<Cancella id={row.id} />} */}
                  <Link
                    id={row.id}
                    to={"modifica"}
                    state={row.id}
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
    </>
  );
}
