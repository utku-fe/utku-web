import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  StyledFooterContainer,
  StyledAccountsContainer,
  StyledLink,
} from "./Footer.styles";
const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledAccountsContainer>
        <StyledLink to="https://github.com/utku-fe" target="_blank">
          <GitHubIcon />
        </StyledLink>
        <StyledLink to="https://www.linkedin.com/in/utkutekin/" target="_blank">
          <LinkedInIcon />
        </StyledLink>
        <StyledLink to="https://x.com/utkutekin_" target="_blank">
          <XIcon />
        </StyledLink>
        <StyledLink
          to="https://www.instagram.com/utkunihattekin/"
          target="_blank"
        >
          <InstagramIcon />
        </StyledLink>
      </StyledAccountsContainer>
    </StyledFooterContainer>
  );
};
export default Footer;
