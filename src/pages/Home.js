import React from "react";
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Breadcrumbs,
  Link
} from "@material-ui/core";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { FormRow, ButtonItem } from "../pages/Layout/FormRow";

const HomePageContainer = styled(Container)`
  display: flex;
  height: 100vh;
`;

const Title = styled(Typography)`
  color: black;
`;

const IntroTextContainer = styled.div`
  align-self: center;
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

const ButtonTextContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin: auto auto;
  color: ${props => (props.color ? `${props.color}` : "black")};
`;

const ButtonText = styled(Typography)`
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  color: inherit;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const TechStackText = styled.span`
  background-color: ${props => (props.color ? `${props.color}` : "black")};
`;
const BlockColour = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "black")};
`;
const Home = props => {
  const buttonColors = ["#DD6E42", "#E8DAB2", "#4F6D7A", "#C0D6DF"];
  const BackgroundTextPairs = {
    "#E8DAB2": "#1f2d3d",
    "#DD6E42": "#fff",
    "#4F6D7A": "#fff",
    "#C0D6DF": "#1f2d3d"
  };
  const text = ["Portfolio", "Travel", "blog", "other stuff"];
  const size = [4, 8, 3, 4];
  return (
    <HomePageContainer disableGutters={true} maxWidth={"xl"}>
      <Grid container>
        <BlockColour>
          {buttonColors.map(i => (
            <BlockColour color={i} />
          ))}
        </BlockColour>
        <Grid container item xs={12} justify="center">
          <IntroTextContainer>
            <Title variant="h1">Abai Edmund</Title>
            <SubTitle paragraph={true}>
              I am a software developer based in London. Open to contract and
              remote work. <br />
              This website was created using{" "}
              <TechStackText color={buttonColors[3]}>ReactJS</TechStackText>,
              <TechStackText color="papayawhip"> Material UI</TechStackText> and
              <TechStackText color={buttonColors[1]}> MongoDB</TechStackText>
            </SubTitle>
            <Breadcrumbs aria-label="breadcrumb">
              {text.map(i => (
                <ButtonTextContainer>
                  <ButtonText color="textPrimary">
                    <Arrow />
                    {i}
                  </ButtonText>
                </ButtonTextContainer>
              ))}
            </Breadcrumbs>
          </IntroTextContainer>
        </Grid>

        <Grid container item xs={12}>
          {/* {Object.keys(BackgroundTextPairs).map(i => (
            <ButtonItem color={i} size={6}>
              <ButtonTextContainer color={BackgroundTextPairs[i]}>
                <BulletPoint color={BackgroundTextPairs[i]} />
                <ButtonText variant="h3">
                  {text[buttonColors.indexOf(i)]}
                </ButtonText>
              </ButtonTextContainer>
            </ButtonItem>
          ))} */}
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
