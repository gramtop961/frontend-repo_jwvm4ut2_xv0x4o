import { Zap, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ label }) => (
    <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-100">
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-sm">
              <Zap size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">VoltAI Analytics</p>
              <p className="text-[11px] text-slate-500 -mt-0.5">Powering Smarter EV Decisions</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink label="Overview" />
            <NavLink label="Owners" />
            <NavLink label="Fleet" />
            <NavLink label="Engineers" />
            <NavLink label="Pricing" />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm">Get started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-1">
              {[
                "Overview",
                "Owners",
                "Fleet",
                "Engineers",
                "Pricing",
              ].map((l) => (
                <a key={l} href="#" className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100">
                  {l}
                </a>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border rounded-md">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
