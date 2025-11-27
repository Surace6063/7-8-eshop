import { useCategories } from "../../api/categoryServices";

const CategoryFilter = ({ setCategory }) => {
  const { data: categories, isLoading, isError, error } = useCategories();
  return (
    <div>
      <label
        className="block text-gray-800 font-medium mb-1 text-sm"
        htmlFor="category"
      >
        Filter By Category
      </label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-md border border-gray-300"
        name="category"
        id="category"
      >
        <option value="">All</option>
        {isLoading ? (
          "loading..."
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
};
export default CategoryFilter;
