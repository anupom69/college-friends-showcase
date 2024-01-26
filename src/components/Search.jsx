
export default function Search({ query, setQuery }) {
  return (
    <div className="text-text-950 text-right space-y-2">
      <label>🔍 </label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        className="rounded-lg px-1 active:border-hidden"
        type="search"
      />
    </div>
  );
}
