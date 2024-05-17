import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/const";

export const ItemContext = createContext();

export default function ItemContextProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items") || initialItems)
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const contextValues = {
    items,
    handleAddItem,
    handleDeleteItem,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRemoveAllItems,
    handleResetToInitial,
    handleToggleItem,
  };

  return (
    <ItemContext.Provider value={contextValues}>
      {children}
    </ItemContext.Provider>
  );
}
