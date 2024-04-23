import { useState } from "react";
import { initialItems } from "../../utils/initialItems";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem.id}</h1>
      <button
        className="px-2 py-1 bg-violet-200 rounded-md"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default UseMemo;
