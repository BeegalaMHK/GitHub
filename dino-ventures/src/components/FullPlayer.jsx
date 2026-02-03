import RelatedList from "./RelatedList";

export default function FullPlayer({ video, category, onMinimize, onSelect }) {
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col w-full h-full">
      <iframe src={video.mediaUrl} className="w-full h-full" allow="autoplay" />

      <div className="p-3 font-bold">{video.title}</div>

      <button onClick={onMinimize} className="bg-gray-700 mx-3 p-2 rounded">
        Minimize ⬇
      </button>

      <RelatedList category={category} onSelect={onSelect} />
    </div>
  );
}
