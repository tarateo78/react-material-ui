import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen ", 159, 6.0, 24, 4.0),
  createData("Ice ", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Ginger", 356, 16.0, 49, 3.9),
];

export default function TabellaTimbrature({ dati, title }) {
  console.log(dati);
  return (
    <>
      <Typography variant="h5" align="center" sx={{ marginTop: 9 }}>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ccc" }}>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell align="center">
                <b>Data</b>
              </TableCell>
              <TableCell align="center">
                <b>Ora</b>
              </TableCell>
              <TableCell align="center">
                <b>Causale</b>
              </TableCell>
              <TableCell align="center">
                <b>Opzioni</b>
              </TableCell>
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
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.data}</TableCell>
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
