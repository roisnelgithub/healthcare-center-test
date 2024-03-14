import { ReactNode, createContext, useState } from "react";

interface LanguageContextProps {
  language: string;
  changeLanguage: (value: string) => void;
}
export const LanguageContext = createContext<LanguageContextProps>({
  language: "ES",
  changeLanguage: () => null,
});

interface LanguageContextProviderProps {
  children: ReactNode;
}
export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<string>("");

  const changeLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
