import { ReactNode, createContext, useState } from "react";

interface MenuContextProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  openMenu: () => null,
  closeMenu: () => null,
});

interface MenuContextProviderProps {
  children: ReactNode;
}
export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <MenuContext.Provider value={{ isOpen, closeMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
