// Core
import React from "react";
// Parts
import ButtonMUI from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Button(props) {
  const { type, disabled, children, to, variant,sx } = props;

  return (
    <ButtonMUI sx={sx} disabled={disabled} type={type} variant={variant}>{
    to 
    ? <Link to={to}>{children}</Link> 
    : children}
    </ButtonMUI>
  );
}

Button.defaultProps = {
    variant: "contained",
}
