import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/use-callback">UseCallback</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
