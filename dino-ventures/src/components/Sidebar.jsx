import { dataset } from "../constant/dataset";

export default function Sidebar({ active, setActive, isOpen, isCollapsed }) {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setActive(active)}
        />
      )}

      <div
        className={`
          bg-[#0f0f0f] p-2 z-50 transition-all duration-300

          fixed md:sticky top-14
          h-[calc(100vh-56px)]

          ${isOpen ? "left-0" : "-left-64"} md:left-0

          ${isCollapsed ? "md:w-20" : "md:w-56"}

          w-56
        `}
      >
        <SidebarItem
          icon={HomeIcon}
          label="Home"
          isCollapsed={isCollapsed}
          active={!active}
          onClick={() => setActive(null)}
        />

        {dataset.categories.map((c) => (
          <SidebarItem
            key={c.category.slug}
            icon={
              <img
                src={c.category.iconUrl}
                className="w-7 h-7"
                alt={c.category.name}
              />
            }
            label={c.category.name}
            isCollapsed={isCollapsed}
            active={active === c.category.slug}
            onClick={() => setActive(c.category.slug)}
          />
        ))}
      </div>
    </>
  );
}

function SidebarItem({ icon, label, active, onClick, isCollapsed }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full flex items-center rounded-xl mb-2 transition-all duration-300 overflow-hidden
        ${
          isCollapsed
            ? "flex-col py-3 justify-center"
            : "gap-3 px-3 py-2 justify-start"
        }
        ${
          active
            ? "bg-blue-500/20 text-blue-400"
            : "hover:bg-white/10 text-white"
        }
      `}
    >
      {/* 👉 Active indicator bar */}
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300
          ${active ? "bg-blue-500 opacity-100" : "opacity-0"}
        `}
      />

      {icon}

      {/* Animated label */}
      <span
        className={`
          text-sm font-medium whitespace-nowrap transition-all duration-300
          ${
            isCollapsed
              ? "opacity-0 translate-x-[-10px] pointer-events-none"
              : "opacity-100 translate-x-0 delay-150"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}

const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5v-6h4v6h5a1 1 0 001-1V10"
    />
  </svg>
);
