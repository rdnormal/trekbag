import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export function useItemContext() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemContext must be used within an ItemsContextProvider"
    );
  }
  return context;
}
