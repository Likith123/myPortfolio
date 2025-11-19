import Link from "next/link";
import LightDarkToggle from "./LightDarkToggle";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-bgcolor/20 shadow-md blur-backdrop-filter backdrop-filter backdrop-blur-lg">
      <nav className="">
        <div className="flex items-center justify-between px-16 py-4 border-b border-white/20">
          <div className="text-primary text-2xl font-bold">
            <Link href="/">Portfolio</Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <NavLinks />
            <LightDarkToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
