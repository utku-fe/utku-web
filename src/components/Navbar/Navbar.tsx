import { FC } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  StyledFlagContainer,
  StyledNavbar,
  StyledNavLink,
} from "./Navbar.styled";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <NavbarContainer>
      <StyledNavbar>
        <li>
          <StyledNavLink to="/">{t(`home`)}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/writings">{t(`writings`)}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">{t(`contact`)}</StyledNavLink>
        </li>
      </StyledNavbar>
      <StyledFlagContainer>
        <ReactCountryFlag
          countryCode="TR"
          svg
          style={{ fontSize: "20px" }}
          onClick={() => {
            changeLanguage("tr");
          }}
        />
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{ fontSize: "20px" }}
          onClick={() => {
            changeLanguage("en");
          }}
        />
      </StyledFlagContainer>
    </NavbarContainer>
  );
};
export default Navbar;
