import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
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
        <Image src="/images/logo.png" width={800} height={600} alt="logo" className="w-[100px] h-[100px] rounded-md"/>
      </div>

      {/* Menu Button */}
      <button className="p-2 rounded-md bg-black/50 hover:bg-red-600 transition">
        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`absolute left-0 top-0 h-full w-60 bg-white shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       {/* Logo */}
<div className="mb-6 flex justify-center">
  <Image 
    src="/images/luxora.png" 
    width={500} 
    height={300} 
    alt="logo" 
    className="w-90 h-90 rounded-md drop-shadow-[0_0_100px_rgba(255,255,255,1)]"
  />
</div>


       {/* Navigation Links */}
       <ul className="flex flex-col text-lg mt-20 font-playfair">
         {[
           { name: "Home", path: "/" },
           { name: "About us", path: "/about" },
           { name: "Packages  ⫸", path: "/packages", hasDropdown: true },
           { name: "Contact", path: "/contact" },
           { name: "Gallery Inspired", path: "/galleryinspired" },
         ].map((menu) => (
           <li key={menu.name} className="relative group">
             {menu.hasDropdown ? (
               <>
                 {/* Link for Navigation */}
                 <Link
                   href={menu.path}
                   className="block w-full px-6 py-3 text-gray-800 hover:bg-gray-200 transition text-left"
                 >
                   {menu.name}
                 </Link>

                 {/* Dropdown Menu */}
                 <ul className="absolute left-full top-0 mt-1 w-64 bg-white shadow-lg rounded-lg border z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 font-playfair">
                   {[
                     { name: "Wedding Package", path: "/packages/#wedding-packages" },
                     { name: "Haldi Package", path: "/packages/#haldi-packages" },
                     { name: "Engagement Package", path: "/packages/#engagement-packages" },
                     { name: "Corporate Event Packages", path: "/packages/#corporate-packages" },
                     { name: "Birthday Party Packages", path: "/packages/#birthday-packages" },
                   ].map((subMenu) => (
                     <li key={subMenu.name}>
                       <Link
                         href={subMenu.path}
                         className="block px-6 py-3 text-gray-800 hover:bg-gray-200 transition"
                       >
                         {subMenu.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </>
             ) : (
               <Link
                 href={menu.path}
                 className="block w-full px-6 py-3 text-gray-800 hover:bg-gray-200 transition text-left"
               >
                 {menu.name}
               </Link>
             )}
           </li>
         ))}
       </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
