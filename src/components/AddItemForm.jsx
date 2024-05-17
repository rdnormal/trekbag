import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleOnSumbit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  const handleOnChange = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleOnSumbit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={handleOnChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
