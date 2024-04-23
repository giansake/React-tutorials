import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col">
      <header>
        <h1 className="font-bold">State:</h1>
        <p className="italic leading-5">
          any piece of information that might change from one render to the next
        </p>
      </header>
      <div className="pt-4">
        <span>Count is: {count}</span>
        <div className="flex gap-x-2">
          <button
            className="px-2 py-1 bg-violet-200 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-2 py-1 bg-violet-200 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
