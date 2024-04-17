import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function TabellaTimbrature({ dati, title }) {
  console.log(dati);
  return (
    <>
      <Typography variant="h5" align="center" sx={{ marginTop: 9 }}>
        {title}
      </Typography>
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
                <TableCell align="right" scope="row">
                  {row.data}
                </TableCell>
                <TableCell align="right">{row.ora}</TableCell>
                <TableCell align="center">{row.causale}</TableCell>
                <TableCell align="center">{"X"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
