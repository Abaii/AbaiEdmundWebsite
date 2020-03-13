import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@material-ui/core";
import Navbar from '../Layout/Navbar';
import HomePageContainer from '../Layout/Container';

const CountryText = styled(Typography)`
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  opacity: 0.6;
  color: #003908;
 
  &:hover {
    cursor: pointer;
  }
`;

const CountryGrid = styled(Grid)`
  background-color: ${props => props.color && `${props.color}`};
  height: 112px;
  margin-bottom: 10px;
  transition: all 0.2s ease-out;
  &:first-of-type {
    background-color: black;
  }
  &:hover {
    padding: 10px;
  }

  &:hover h1 {
    font-size: 80px;
    letter-spacing: 15px;
  }
`;
const TravelPage = () => {
  const countries = ["London", "Berlin", "Costa Brava", "Cambridge", "Lisbon", "Sheffield", "Edinburgh", "Ethiopia"];
    const buttonColors = [
      "#DD6E42",
      "#E8DAB2",
      "#4F6D7A",
      "#C0D6DF",
      "#DD6E42",
      "#E8DAB2",
      "#4F6D7A",
      "#C0D6DF"
    ];

  return (
    <HomePageContainer maxWidth="l">
      <Grid container >
        <Navbar title="Travel" />
          {countries.map(country => {
            return (
              <CountryGrid
                item
                xs={12}
                // color={buttonColors[countries.indexOf(country)]}
              >
                <CountryText variant="h1">{country}</CountryText>
              </CountryGrid>
            );
          })}
      
      </Grid>
    </HomePageContainer>
  );
};
export default TravelPage;
