import { dataset } from "../constant/dataset";

export default function RelatedList({ category, onSelect }) {
  const list = dataset.categories.find(
    (c) => c.category.slug === category.slug,
  ).contents;

  return (
    <div className="mt-3 overflow-y-auto">
      {list.map((v) => (
        <div
          key={v.slug}
          onClick={() => onSelect(v)}
          className="flex gap-2 p-2 hover:bg-gray-800 cursor-pointer"
        >
          <img src={v.thumbnailUrl} className="w-28 rounded" />
          <p className="text-sm">{v.title}</p>
        </div>
      ))}
    </div>
  );
}
