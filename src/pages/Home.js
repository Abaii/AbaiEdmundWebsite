import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import { FormRow, ButtonGrid } from "../pages/Layout/FormRow";

const HomePageContainer = styled(Container)`
  display: flex;
  height: 100vh;
  background-color: #fffff0;
`;

const Home = props => {
  return (
    <HomePageContainer disableGutters={true}>
      <Grid container>
        <Grid container item xs={4}>
          <FormRow title={true}>
            <Typography variant="h1">Abai Edmund</Typography>
            <Typography variant="body1">Software developer</Typography>
            <Typography variant="h2">Dunknoe pIGGOS</Typography>
          </FormRow>
        </Grid>

        <Grid container item xs={8}>
          <ButtonGrid colorOne="#A4A8D1" colorTwo="#8CABBE">
            <Typography variant="h1">Abai Edmund</Typography>
          </ButtonGrid>
          <ButtonGrid colorOne="#776672" colorTwo="#9D858D">
            <Typography variant="h1">Abai Edmund</Typography>
          </ButtonGrid>
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
