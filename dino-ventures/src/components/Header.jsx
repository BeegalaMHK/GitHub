export default function Header({ search, setSearch }) {
  return (
    <div className=" shadow px-4 py-3 flex items-center">
      <h1 className="text-xl font-bold text-red-600 mr-4">MyTube</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search videos..."
        className="flex-1 border rounded-full px-4 py-2"
      />
    </div>
  );
}
