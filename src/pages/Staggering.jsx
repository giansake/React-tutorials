import { useState, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      { opacity: isOpen ? 1 : 0 },
      { type: "spring", bounce: 0, duration: 0.5 }
    );
    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="">
      <div ref={scope}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "close" : "open"}
        </button>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <li>Item 1 </li>
          <li>Item 2 </li>
          <li>Item 3 </li>
          <li>Item 4 </li>
          <li>Item 5 </li>
        </ul>
      </div>
    </div>
  );
}
