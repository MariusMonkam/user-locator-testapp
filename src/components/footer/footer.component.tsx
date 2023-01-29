import React, { FC, ReactElement } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="secondary.main" variant="h5">
              Test App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.contrastText" variant="subtitle1">
              {
                " React |Typescript | Redux-toolkit | Axios | Material UI | React Router"
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.contrastText" variant="subtitle1">
              {`© ${new Date().getFullYear()} Marius Monkam`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
