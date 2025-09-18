import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "হোম" },
    { to: "/courses", label: "কোর্সসমূহ" },
    { to: "/about", label: "আমাদের সম্পর্কে" },
    { to: "/contact", label: "যোগাযোগ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 py-2 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl bg-primary/90 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <div className="flex items-center gap-1 my-5">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-14 filter brightness-0 invert"
              />

              <h1 className="text-3xl font-bold font-tiroBangla select-none cursor-default text-white tracking-wide hover:text-[#C3A753] transition-all duration-300">
                Qur’anic ‘Ilm
              </h1>
            </div>
          </Link>

          <nav className="items-center hidden gap-6 text-xl md:flex font-hindSiliguri">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C3A753] border-[#C3A753]"
                    : "hover:text-[#C3A753] transition-all duration-200 font-normal"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

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

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-[#0F1E1D] text-[#FAF9F6] shadow-lg z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#C3A753]">
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <img
              src="/Elmul-Quran Navbar.png"
              alt="Ilmul Quran Logo"
              className="w-auto h-10"
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

        <nav className="flex flex-col gap-6 p-6 text-lg font-hindSiliguri">
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
