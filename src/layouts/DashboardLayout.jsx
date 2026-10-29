
import { useState } from "react";
import {Bell, Menu, X,} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Library", path: "/dashboard/library" },
  { name: "Study Area", path: "/dashboard/study-area" },
  { name: "Summaries · Coming Soon", disabled: true },
  { name: "Mock Exam · Coming Soon", disabled: true },
  { name: "Marketplace · Coming Soon", disabled: true },
  { name: "Become a Contributor", path: "/dashboard/contribute" },
  { name: "Profile", path: "/dashboard/profile" },
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Log Out", path: "/logout" },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F4F3] text-[#202D40]">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[250px] flex-col border-r border-[#DFE7E7] bg-white px-5 py-7 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <NavLink to="/dashboard" className="flex items-center gap-2"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#206F7E] text-2xl font-bold text-white">
              p.
            </span>

            <span className="text-2xl font-bold tracking-tight">
              prepnivo
            </span>
          </NavLink>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((link) =>
            link.disabled ? (
              <span
                key={link.name}
                className="rounded-xl px-3 py-3 text-[13px] text-[#697F98] opacity-75"
              >
                {link.name}
              </span>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/dashboard"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-[13px] transition-colors ${
                    isActive
                      ? "bg-[#E7F3F1] font-medium text-[#526D87]"
                      : "text-[#697F98] hover:bg-[#F1F4F3]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Sidebar bottom */}
        <div className="mt-auto pt-6">
          <div className="rounded-2xl bg-[#E7F3F1] p-4">
            <h3 className="text-sm font-bold">
              Make room for more.
            </h3>

            <NavLink
              to="/dashboard/premium"
              className="mt-4 block rounded-xl bg-[#206F7E] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#185966]"
            >
              Explore Premium
            </NavLink>
          </div>

          <div className="mt-8 text-xs leading-relaxed text-[#697F98]">
            <p>Adaeze Okafor</p>
            <p>Free account</p>
          </div>
        </div>
      </aside>

      {/* Main workspace */}
      <div className="min-h-screen lg:ml-[250px]">

        {/* Top navigation */}
        <header className="sticky top-0 z-20 flex h-[85px] items-center justify-between border-b border-[#DFE7E7] bg-white px-5 md:px-10">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <p className="text-xs text-[#697F98]">
              Workspace
              <span className="mx-2">/</span>
              <span className="text-[#202D40]">Dashboard</span>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="rounded-full bg-[#E7F3F1] px-3 py-1 text-[10px] font-bold text-[#206F7E]">
              UNILAG · 200 LEVEL
            </span>

            <button
              className="text-[#202D40]"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
          </div>
        </header>

        <main className="px-5 py-8 md:px-10 md:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
