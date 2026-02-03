import { dataset } from "../constant/dataset";
import { motion } from "framer-motion";

export default function RelatedList({ category, onSelect }) {
  const list = dataset.categories.find(
    (c) => c.category.slug === category.slug,
  ).contents;

  return (
    <div className="space-y-4">
      {list.map((v, index) => (
        <motion.div
          key={v.slug}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(v)}
          className="flex gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors group"
        >
          <div className="relative w-36 aspect-video shrink-0 overflow-hidden rounded-md bg-gray-900">
            <img
              src={v.thumbnailUrl}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              alt={v.title}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium line-clamp-2 leading-snug group-hover:text-red-500 transition-colors">
              {v.title}
            </p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
              {category.name}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
