import { dataset } from "../constant/dataset";

export default function Sidebar({ active, setActive }) {
  return (
    <div className="w-56 border-r-black p-2">
      <button
        onClick={() => setActive(null)}
        className={`w-full p-2 rounded mb-2 ${
          !active ? "bg-blue-500 text-white" : ""
        }`}
      >
        All
      </button>

      {dataset.categories.map((c) => (
        <button
          key={c.category.slug}
          onClick={() => setActive(c.category.slug)}
          className={`w-full flex items-center gap-2 p-2 mb-2 rounded ${
            active === c.category.slug
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <img src={c.category.iconUrl} className="w-5" />
          {c.category.name}
        </button>
      ))}
    </div>
  );
}
