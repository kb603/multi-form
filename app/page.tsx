import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Multi-Step Form
        </h1>
        <h2 className="text-lg text-gray-600 mb-8">
          Please fill out this form to get started. Click Next to begin.
        </h2>
        <Link href="/user">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
