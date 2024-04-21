import { Box, Divider, Typography } from "@mui/material";

const Info = () => {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{ marginTop: 9, marginBottom: 2 }}
      >
        {"Info"}
      </Typography>
      <Box marginLeft={2} marginRight={2}>
        <Typography>
          Applicazione web realizzata con:
          <ul>
            <li>React.js</li>
            <li>Material UI</li>
          </ul>
          Codice sorgente disponibile al segunete indirizzo:
          <br />
        </Typography>
        <a
          href="https://github.com/tarateo78/react-material-ui"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/tarateo78/react-material-ui
        </a>
        <Divider sx={{ margin: "20px 0" }} />
        <Typography>
          Le chiamate API Rest sono inviate all'indirizzo:
          <br />
          <a
            href="https://matteotarabini.altervista.org/api/timbrature/"
            target="_blank"
            rel="noreferrer"
          >
            https://matteotarabini.altervista.org/api/timbrature/
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Info;
