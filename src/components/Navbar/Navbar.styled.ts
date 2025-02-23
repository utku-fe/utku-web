import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("nav")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

export const StyledNavbar = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  listStyle: "none",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0",
  },
}));

export const StyledFlagContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0",
  },
}));

export const StyledNavLink = styled(Link)(({ theme }) => ({
  fontFamily: "Roboto Mono",
  fontWeight: "400",
  textDecoration: "none",
  color: "black",

  "&:hover": {
    color: "gray",
    textDecoration: "underline",
  },
}));
