import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const link =
    "px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition";
  const active = ({ isActive }) =>
    isActive ? `${link} bg-white/10` : link;

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg md:text-xl font-extrabold">
          Serene Garden House
        </Link>

        <button
          className="md:hidden rounded-xl border border-white/30 px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/rooms" className={active}>Rooms</NavLink>
          <NavLink to="/weddings" className={active}>Weddings</NavLink>
          <NavLink to="/booking" className={`${link} bg-white text-green-700`}>
            Book Now
          </NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-green-800/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={active} end>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/rooms" className={active}>Rooms</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/weddings" className={active}>Weddings</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/booking" className={`${link} bg-white text-green-700`}>Book Now</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={active}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
