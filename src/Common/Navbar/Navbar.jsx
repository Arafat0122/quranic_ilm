import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "হোম" },
    { to: "/courses", label: "কোর্সসমূহ" },
    { to: "/about", label: "আমাদের সম্পর্কে" },
    { to: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <>
      <header className="bg-[#0F1E1D] text-[#FAF9F6] shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <div className="flex-shrink-0">
              <h1 className="text-3xl hover:text-[30.5px] font-bold font-tiroBangla select-none cursor-default text-white tracking-wide hover:text-[#C3A753] transition-all duration-300">
                Qur’anic ‘Ilm
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-hindSiliguri text-xl">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C3A753] font-semibold border-b-2 border-[#C3A753] pb-1"
                    : "hover:text-[#C3A753] transition-all duration-200"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              className="text-[#C3A753] text-3xl focus:outline-none"
              onClick={() => setDrawerOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-[#0F1E1D] text-[#FAF9F6] shadow-lg z-50 transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#C3A753]">
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <img
              src="/Elmul-Quran Navbar.png"
              alt="Ilmul Quran Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            aria-label="Close Menu"
            className="text-[#C3A753] text-3xl focus:outline-none"
            onClick={() => setDrawerOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-6 font-hindSiliguri text-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#C3A753] font-semibold border-b-2 border-[#C3A753] pb-1"
                  : "hover:text-[#C3A753] transition-all duration-200"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
