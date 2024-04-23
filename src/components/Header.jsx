import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex gap-x-2 py-2 border-b border-black mb-4 w-screen flex-wrap">
        <Link to="/">Home</Link>
        <Link to="/use-state">UseState</Link>
        <Link to="/use-effect">UseEffect</Link>
        {/* <Link to="/use-memo">UseMemo</Link> */}
        <Link to="/use-callback">UseCallback</Link>
        <Link to="/staggering-animation">Staggering</Link>
        <Link to="/more-staggering-animation">More staggering</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
