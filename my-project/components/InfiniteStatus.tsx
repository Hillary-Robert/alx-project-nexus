export default function InfiniteStatus({
  loading,
  hasMore,
}: {
  loading: boolean;
  hasMore: boolean;
}) {
  return (
    <div className="flex items-center justify-center py-6 text-sm text-gray-600">
      {loading ? "Loading more…" : hasMore ? "Scroll to load more" : "You’ve reached the end"}
    </div>
  );
}
