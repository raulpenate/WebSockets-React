import { createContext, ReactNode, useState } from "react";

interface iUiContext {
  hideMenu?: boolean;
  showMenu?: () => void;
  hiddingMenu?: () => void;
}

const ui = {
  hideMenu: false,
  showMenu: () => {},
  hiddingMenu: () => {},
};

export const UiContext = createContext<iUiContext>(ui);

export const UiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hideMenu, sethideMenu] = useState<boolean>(false);

  const showMenu = (): void => {
    sethideMenu(false);
  };
  const hiddingMenu = (): void => {
    sethideMenu(true);
  };

  return (
    <UiContext.Provider
      value={{
        hideMenu,
        showMenu,
        hiddingMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
