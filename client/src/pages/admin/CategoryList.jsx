import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"


const CategoryList = () => {
  return (
    <div className="px-6 mt-4">
      <div className="flex justify-between items-center w-full mb-4 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl text-gray-800 font-semibold">Categories</h2>
       
            <p className="text-sm text-gray-500">
              25 items found
            </p>
    
        </div>

        {/* Search Input */}
       <div>
         <Input
          type="text"
          placeholder="Search products..."
          className="w-80 rounded-lg"
          size="lg"
        />
       </div>

       <Button variant="secondary">
         Add Category
       </Button>
      </div>

      {/* Card */}
      <div className="bg-white shadow rounded-xl p-4 border border-gray-100 mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50 border-b border-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-800">ID</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-800">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-800">Actions</th>
              </tr>
            </thead>

            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-5 space-x-2">
        pagination
      </div>
    </div>
  )
}
export default CategoryList