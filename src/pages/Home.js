import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Breadcrumbs,
  Link,
  Button
} from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { FormRow, ButtonItem } from "../pages/Layout/FormRow";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { translations as t } from "../translations";
import Navbar from "../pages/Layout/Navbar";
import HomePageContainer from "../pages/Layout/Container";

const SubTitle = styled(Typography)`
  line-height: 1.6;
  letter-spacing: 1.4px;
  padding: 3px;
  color: grey;
  font-size: 24px;
`;

const Arrow = styled.div`
  height: 10px;
  width: 10px;
  clip-path: polygon(
    0 40%,
    62% 40%,
    62% 15%,
    100% 47%,
    62% 75%,
    62% 52%,
    0 52%
  );
  background-color: ${props => (props.color ? `${props.color}` : "black")};
  margin-right: 10px;
  align-self: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-self: center;
`;

const TechStackText = styled.span`
  text-decoration: underline solid
    ${props => (props.color ? `${props.color}` : "black")};
`;


const DescriptionWrapper = styled.div`
  display: flex;
  /* &::after {
    content: "";
    background-color: green;
    height: 200px;
    width: 400px;
    opacity: 0.8;
    position: absolute;
    top: 50%;

  } */
`;

const LanguageWrapper = styled.div`
  display: flex; 
  align-items: flex-end;
`

const Description = styled(Typography)`
  font-size: 60px;
  line-height: 1.3;
  font-weight: bold;
  text-align: left;
  letter-spacing: 1.4px;
`;

const EmojiSpan = styled.span`
  font-size: 100px;
  margin-left: 5%;
`

const Home = props => {
  const [language, setLanguage] = useState("EN");
  
  const buttonColors = ["#DD6E42", "#E8DAB2", "#4F6D7A", "#C0D6DF"];
  const BackgroundTextPairs = {
    "#E8DAB2": "#1f2d3d",
    "#DD6E42": "#fff",
    "#4F6D7A": "#fff",
    "#C0D6DF": "#1f2d3d"
  };
  const size = [4, 8, 3, 4];
  const onLanguageChange = lang => () => setLanguage(lang);
  return (
    <HomePageContainer maxWidth="l">
      <Grid container>
        <Navbar title="Abai Edmund" />

        <Grid container item xs={12} justify="center">
          <Grid item xs={1} direction="column" alignSelf="flex-start">
            <IconWrapper>
              <GitHubIcon />
              <LinkedInIcon />
            </IconWrapper>
          </Grid>
          <Grid item xs={6}>
            <DescriptionWrapper>
              <Description paragraph={true}>
                {t.headerTitle[language]}
                <TechStackText color={buttonColors[3]}>
                  {t.headerSpan[language]}{" "}
                </TechStackText>
                <br />
                {t.headerLocation[language]} <br />
                <SubTitle>
                  The aim of this project is to showcase my interests. I am a
                  Computer science graduate from the University of Sheffield.
                  Including music, art, photography, programming, and languages.
                  I hope that eventually this website will serve as the entry
                  point into viewing all my work. Enjoy.
                </SubTitle>
              </Description>
            </DescriptionWrapper>
          </Grid>
        </Grid>
        <Grid container item xs={12}></Grid>
        <Grid container item xs={12}>
          <IconWrapper item xs={3} justify="flex-end" direction="column">
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" onClick={onLanguageChange("EN")}>
                <Typography variant="h6">EN</Typography>
              </Link>
              <Link color="inherit" onClick={onLanguageChange("DE")}>
                <Typography variant="h6">DE</Typography>
              </Link>
            </Breadcrumbs>
          </IconWrapper>
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
