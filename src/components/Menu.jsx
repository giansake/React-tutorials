export function Menu() {
  return (
    <nav className="menu bg-violet-500 text-white fixed top-[49px] pt-[calc(40px+.5em)] left-0 w-[400px] h-full px-2">
      <ul className="text-4xl flex flex-col gap-y-4">
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}
