export function PinterestCard({ src, title = "" }) {
  return (
    <div className="break-inside-avoid mb-4 bg-white">
      <div className="group relative overflow-hidden rounded-2xl">
        <img src={src} alt={title} className="w-full h-auto block" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 cursor-pointer" />
        <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 bg-red-600 text-white px-4 py-2 rounded-full font-semibold cursor-pointer">
          Save
        </button>
        <button className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 bg-black/30 rounded-full cursor-pointer px-4 py-2 text-white text-lg">
          Profile ▾
        </button>
      </div>
      <div className="px-3 py-2 pt-1 text-sm font-medium text-gray-800">
        {title}
      </div>
    </div>
  );
}
