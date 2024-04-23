import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //   the code we want to run
    console.log(count);

    return () => {
      // optional clean up function
    };
  }, []); // dependency array

  return (
    <div className="flex flex-col">
      <header>
        <h1 className="font-bold">Use Effect:</h1>
        <p className="italic leading-5">
          Used to perform side-effects in our application, consequences of some
          action. Like a medication. To keep it simple in most application it
          will be triggered by a state change
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

export default UseEffect;
