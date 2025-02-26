import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside
      className="fixed top-0 left-0 h-full z-50 flex flex-col items-center py-6 px-4 transition-all duration-300"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {/* Logo */}
      <div className="mb-6">
        <Image src="/images/logo.avif" width={500} height={300} alt="logo" className="w-16 h-10 rounded-md" />
      </div>

      {/* Menu Button (Just for styling, no click needed) */}
      <button className="p-2 rounded-md bg-black/50 hover:bg-red-600 transition">
        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Navigation Menu (Opens on Hover) */}
      <nav
        className={`absolute left-0 top-0 h-full w-60  bg-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="mb-6">
          <Image src="/images/logo.avif"  width={500} height={300}alt="logo" className="w-40 h-40 rounded-md" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col text-lg font-semibold mt-20">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Gallery Inspired", path: "/galleryinspired" },
          ].map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.path}
                className="block w-full px-6 py-3 text-gray-800 hover:bg-gray-200 transition text-left"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
