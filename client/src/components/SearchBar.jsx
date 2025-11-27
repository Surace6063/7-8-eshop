import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center border border-gray-300 py-2 px-4 rounded-full">
        <Search className="text-gray-400 cursor-pointer hover:text-gray-600 transition" size={20} />
        <input type="text" placeholder="search..." className="focus:outline-none" />
    </div>
  )
}
export default SearchBar