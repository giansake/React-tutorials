export const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="bg-violet-200 px-2 py-1 rounded-md fixed top-[calc(49px+.5em)] z-30 left-2"
  >
    {isOpen ? "close" : "open"}
  </button>
);
