import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

const BorderBox = styled(Box)`
  border: black solid 1px;
`;

const ButtonGridContainer = styled(Paper)`
  border: black solid 1px;
  height: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "inherit")};
  padding: 15px;
  display: flex;
`;
export const FormRow = props => {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <BorderBox title={props.title}>{props.children}</BorderBox>
      </Grid>
    </React.Fragment>
  );
};

export const ButtonItem = props => {
  return (
    <>
      <Grid item xs={props.size}>
        <ButtonGridContainer color={props.color} elevation={3}>
          {props.children}
        </ButtonGridContainer>
      </Grid>
    </>
  );
};
