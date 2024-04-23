import { Box, Divider, Typography } from "@mui/material";
import Nav from "../Nav";

const Info = ({ pages }) => {
  return (
    <>
      <Nav pages={pages} />
      <Typography
        variant="h5"
        align="center"
        sx={{ marginTop: 9, marginBottom: 2 }}
      >
        {"Info"}
      </Typography>

      <Box marginLeft={2} marginRight={2} marginTop={5}>
        <Divider sx={{ margin: "40px 0" }} />
        Applicazione web realizzata con:
        <ul>
          <li>React.js</li>
          <li>Material UI</li>
        </ul>
        <Divider sx={{ margin: "40px 0" }} />
        Codice sorgente:
        <br />
        <br />
        {"👉🏻 "}
        <a
          href="https://github.com/tarateo78/react-material-ui"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/tarateo78/react-material-ui
        </a>
        <Divider sx={{ margin: "40px 0" }} />
        <Typography>
          Le chiamate API Rest sono inviate all'indirizzo:
          <br />
          <br />
          {"👉🏻 "}
          <a
            href="https://matteotarabini.altervista.org/api/timbrature/"
            target="_blank"
            rel="noreferrer"
          >
            https://matteotarabini.altervista.org/api/timbrature/
          </a>
        </Typography>
        <Divider sx={{ margin: "40px 0" }} />
      </Box>
    </>
  );
};

export default Info;
