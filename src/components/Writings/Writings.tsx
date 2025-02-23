import { useTranslation } from "react-i18next";
const Writings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t(`writings`)}</h1>
    </div>
  );
};
export default Writings;
