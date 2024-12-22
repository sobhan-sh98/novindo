export default function Pagination({page,totalPages,setPage}){
    return(
        <div className="flex justify-between mb-4">
        <button
          className={`bg-gray-300 px-4 py-2 rounded ${page === 1 ? 'opacity-50' : ''}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={`bg-gray-300 px-4 py-2 rounded ${page === totalPages ? 'opacity-50' : ''}`}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next Page
        </button>
      </div>
    )
}