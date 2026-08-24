export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-28">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
        <p className="text-sm font-medium text-navy-muted">Loading...</p>
      </div>
    </div>
  );
}
