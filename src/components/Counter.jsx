import { useItemContext } from "../lib/hooks";

export default function Counter() {
  const { items } = useItemContext();

  const totalNumberOfItems = items.length;
  const numberOfItemsPacked = items.filter((item) => item.packed).length;

  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
