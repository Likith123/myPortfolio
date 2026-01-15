import Link from "next/link";
import LightDarkToggle from "./LightDarkToggle";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-bgcolor/20 shadow-md blur-backdrop-filter backdrop-filter backdrop-blur-lg">
      <nav className="">
        <div className="flex items-center justify-between px-16 py-4 border-b border-white/20">
          <div className="tracking-wide text-3xl font-black">
            <Link href="/" className="flex justify-center items-center">
              <span className="mr-3 text-lg p-2 bg-primary text-foreground rounded-lg">
                LA
              </span>
              <span>
                Likith <span className="text-primary italic">Adusumalli</span>
              </span>
            </Link>
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
