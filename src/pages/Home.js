import React, { useState } from "react";
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
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { FormRow, ButtonItem } from "../pages/Layout/FormRow";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { translations as t } from "../translations";
import Navbar from "../pages/Layout/Navbar";

export const HomePageContainer = styled(Container)`
  display: flex;
  color: #002b5a;
  margin: 0 auto;
  background-color: #efe8d7;

  height: 90vh;
`;

const SubTitle = styled(Typography)`
  line-height: 1.6;
  letter-spacing: 1.4;
  padding: 3px;
  color: grey;
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

const IconWrapper = styled(Grid)``;

const TechStackText = styled.span`
  text-decoration: underline solid
    ${props => (props.color ? `${props.color}` : "black")};
  text-decoration-thickness: 1000px;
`;
const BlockColour = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "black")};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  width: 70%;
`;

const Description = styled(Typography)`
  font-size: 36px;
  line-height: 1.3;
  font-weight: 600;
`;

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
    <HomePageContainer>
      <Grid container>
        <Navbar />

        <Grid container item xs={12} direction="column">
          <DescriptionWrapper>
            <Description paragraph={true}>
              {t.headerTitle[language]}{" "}
              <TechStackText color={buttonColors[3]}>
                {t.headerSpan[language]}
              </TechStackText>
              ,
              <br /> I bring
              <TechStackText color="#dbd2ba"> your designs </TechStackText>
              to life, <br />
              so you
              <TechStackText color={"#fff"}> can achieve </TechStackText>
              your goals.
            </Description>
          </DescriptionWrapper>
          <div>
            <GitHubIcon />
            <LinkedInIcon />
          </div>
        </Grid>

        <Grid
          container
          item
          xs={12}
          justify="space-between"
          align-items="flex-end"
        >
          <Grid item xs={4}>
            <SubTitle>Based in London, UK.</SubTitle>
            <SubTitle>
              Open to offers from remote and contract opportunities.
            </SubTitle>
            <SubTitle>
              If you are interested please check out my portfolio.
            </SubTitle>
          </Grid>
          <IconWrapper item xs={3}></IconWrapper>

          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" onClick={onLanguageChange("EN")}>
              <Typography variant="h6">EN</Typography>
            </Link>
            <Link color="inherit" onClick={onLanguageChange("DE")}>
              <Typography variant="h6">DE</Typography>
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
