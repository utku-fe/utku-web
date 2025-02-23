import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "#f8f9fa",
}));

export const StyledAccountsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",

  "&:hover": {
    color: "lightgray",
  },

  svg: {
    fontSize: "2rem",
  },
}));
