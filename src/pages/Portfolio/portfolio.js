import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@material-ui/core';
import Navbar  from '../../pages/Layout/Navbar';

const PortfolioWrapper = styled.div`
    max-width: 50%; 
    background-color: blue;
    margin: 0 auto;
`

const PortfolioTitle = styled(Typography)`
    font-weight: bold;
`
const Portfolio = props => {
    return (
      <Container maxWidth="l">
        <Grid container xs={12}>
          <Grid container item xs={12}>
            <Navbar title="Abai Edmund" />
            <PortfolioWrapper>
              <PortfolioTitle variant="h1">Title</PortfolioTitle>
            </PortfolioWrapper>
          </Grid>
        </Grid>
      </Container>
    );
}

export default Portfolio;