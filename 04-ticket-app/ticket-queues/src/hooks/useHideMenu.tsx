import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (hide: boolean) => {
  const { showMenu, hiddingMenu } = useContext(UiContext);
  useEffect(() => {
    if (hide) {
      hiddingMenu?.();
    } else {
      showMenu?.();
    }
  }, [hide, hiddingMenu, showMenu]);
};