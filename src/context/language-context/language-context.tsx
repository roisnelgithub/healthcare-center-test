import { ReactNode, createContext, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextProps {
  language: string;
  changeLanguage: (value: string) => void;
}
export const LanguageContext = createContext<LanguageContextProps>({
  language: "es",
  changeLanguage: () => null,
});

interface LanguageContextProviderProps {
  children: ReactNode;
}
export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<string>("es");
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
