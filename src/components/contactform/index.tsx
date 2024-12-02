
export function ContactForm() {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center">
        <div className="bg-green-700  w-fit p-3 mb-6 rounded-full">
        <h3 className="text-lg text-center text-white">Contact Us</h3>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="text"
            placeholder="Contact Details"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-green-700  text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            GO
          </button>
        </form>
      </div>
    );
  }
  