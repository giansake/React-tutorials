import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex gap-x-2 py-2 border-b border-black mb-4">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/use-callback">UseCallback</Link>
        <Link to="/use-state">UseState</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
