import { useContext } from "react";
import { UiContext } from "../contexts";
export default function useUi() {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  return { isMenuOpen, toggleSideMenu };
}
