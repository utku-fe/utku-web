import { MainContentContainer } from "./MainContent.styled";
import { useTranslation } from "react-i18next";
const MainContent = () => {
  const { t } = useTranslation();
  return (
    <MainContentContainer>
      <h1>{t(`greetings`)}</h1>
    </MainContentContainer>
  );
};
export default MainContent;
