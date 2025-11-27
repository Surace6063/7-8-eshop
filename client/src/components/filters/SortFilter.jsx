const SortFilter = ({setSort}) => {
  return (
    <div>
        <label className="block text-gray-800 font-medium mb-1 text-sm" htmlFor="sort">Sort</label>
        <select onChange={(e) => setSort(e.target.value)} className="p-2 rounded-md border border-gray-300" name="sort" id="sort">
            <option value="-created_at" selected>Newest</option>
            <option value="created_at">Oldest</option>
            <option value="-price">price (high to low)</option>
            <option value="price">price (low to high)</option>
        </select>
    </div>
  )
}
export default SortFilter