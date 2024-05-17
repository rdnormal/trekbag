import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddItem } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
