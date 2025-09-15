export type SortBarProps = {
  sortBy: "price" | "rating" | "";
  sortOrder: "asc" | "desc" | "";
  setSortBy: (v: "price" | "rating" | "") => void;
  setSortOrder: (v: "asc" | "desc" | "") => void;
  onApply: () => void;
};

export default function SortBar({
  sortBy, sortOrder, setSortBy, setSortOrder, onApply
}: SortBarProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-sm font-medium">Sort:</span>

      <select
        className="rounded-lg border px-3 py-2"
        value={sortBy}
        onChange={(e) => { setSortBy(e.target.value as any); onApply(); }}
        aria-label="Sort by"
      >
        <option value="">None</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>

      <select
        className="rounded-lg border px-3 py-2"
        value={sortOrder}
        onChange={(e) => { setSortOrder(e.target.value as any); onApply(); }}
        aria-label="Sort order"
      >
        <option value="">—</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}
