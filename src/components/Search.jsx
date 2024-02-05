import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchQuery, setSearchQuery] = useSearchParams({q: ""})
  return (
    <div className="text-text-950 text-right space-y-2">
      <label>🔍 </label>
      <input
        value={searchQuery.get("q")}
        onChange={(e) => setSearchQuery({q: e.target.value.toLowerCase()})}
        className="rounded-lg px-1 active:border-hidden"
        type="search"
      />
    </div>
  );
}
