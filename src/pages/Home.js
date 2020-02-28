import React from "react";
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
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const HomePageContainer = styled(Container)`
  display: flex;
  height: 100vh;
`;

const Title = styled(Typography)`
  color: black;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const IntroTextContainer = styled.div`
  display:flex; 
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 50px;
  width: 100%;
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

const IconWrapper = styled(Grid)`

`
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

const TechStackText = styled.span`
  background-color: ${props => (props.color ? `${props.color}` : "black")};
`;
const BlockColour = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "black")};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  width: 70%;
`

const Description = styled(Typography)`
  font-size: 36px;
  line-height: 1.7;
  font-weight: 600;
`
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
    <HomePageContainer>
      <Grid container>
        <Grid container item xs={12} justify="flex-start">
          <IntroTextContainer>
            <Title variant="h5">Abai Edmund</Title>
            <ButtonTextContainer>
              {text.map(i => (
                <Button>
                  <ButtonText color="textPrimary">{i}</ButtonText>
                </Button>
              ))}
            </ButtonTextContainer>
          </IntroTextContainer>
        </Grid>

        <Grid container item xs={12}>
          <DescriptionWrapper>
            <Description paragraph={true}>
              I am a{" "}
              <TechStackText color={buttonColors[3]}>
                Software Developer
              </TechStackText>
              ,
              <br /> focused on bringing,
              <TechStackText color="papayawhip">
                {" "}
                beautiful designs{" "}
              </TechStackText>
              to life, <br />
              helping you achieve your{" "}
              <TechStackText color={buttonColors[1]}> goals.</TechStackText>
            </Description>
          </DescriptionWrapper>
        </Grid>

        <Grid container item xs={12} justify="space-between" align-items="flex-end">
          <IconWrapper item xs={3}> 
            <GitHubIcon />
            <LinkedInIcon />
          </IconWrapper> 
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit">
              <Typography variant="h6">EN</Typography>
            </Link>
            <Link color="inherit">
              <Typography variant="h6">DE</Typography>
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};


export default Home;
