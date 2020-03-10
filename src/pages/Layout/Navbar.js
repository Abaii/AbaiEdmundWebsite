import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const IntroTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 50px;
  width: 100%;
`;

const Title = styled(Typography)`
  color: #1f2d3d;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  border: 3px solid black;
  padding: 10px;
`;
const ButtonTextContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  color: ${props => (props.color ? `${props.color}` : "black")};
`;

const ButtonText = styled(Typography)`
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  color: inherit;
  opacity: 1;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const RouteLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

const NavButton = styled(Button)`
  margin-left: 20px;
`;

const Navbar = ({ title }) => {
  const text = ["Portfolio", "Travel", "blog", "other stuff"];

  return (
    <Grid container item xs={12} justify="flex-start">
      <IntroTextContainer>
        <RouteLink to="/">
          <Title variant="h5">{title}</Title>
        </RouteLink>
        <ButtonTextContainer>
          {text.map(i => (
            <RouteLink to={`/${i}`}>
              <NavButton variant="outlined">
                <ButtonText color="textPrimary">{i}</ButtonText>
              </NavButton>
            </RouteLink>
          ))}
        </ButtonTextContainer>
      </IntroTextContainer>
    </Grid>
  );
};

export default Navbar;
