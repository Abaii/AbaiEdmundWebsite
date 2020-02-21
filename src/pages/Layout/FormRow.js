import React from "react";
import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";

const BorderBox = styled(Box)`
  border: black solid 1px;
`;

const ButtonGridContainer = styled(Box)`
  border: black solid 1px;
  height: 100%;
  background-color: ${props => (props.color ? `${props.color}` : "inherit")};
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

export const ButtonGrid = props => {
  return (
    <>
      <Grid item xs={6}>
        <ButtonGridContainer color={props.colorOne}>
          {props.children}
        </ButtonGridContainer>
      </Grid>
      <Grid item xs={6}>
        <ButtonGridContainer color={props.colorTwo}>
          {props.children}
        </ButtonGridContainer>
      </Grid>
    </>
  );
};
