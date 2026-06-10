import { PinterestCard } from "./pinterestCard";

export function PinterestGrid({ items }) {
  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 p-4">
        {items.map((item) => (
          <PinterestCard key={item.id} src={item.src} title={item.title} />
        ))}
      </div>
    </>
  );
}
