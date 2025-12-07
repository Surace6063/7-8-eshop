import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [serach, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/products/?search=${serach}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="md:flex gap-2 items-center border border-gray-300 py-2 px-4 rounded-full hidden">
        <Search
          onClick={handleSearch}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition"
          size={20}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search..."
          className="focus:outline-none"
        />
      </div>
    </form>
  );
};
export default SearchBar;
