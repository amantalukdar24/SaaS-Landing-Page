"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 3;

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  

  
  const filteredUsers = users.filter((user:any) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  
  const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const displayedUsers = sortedUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Users List
        </h1>

        
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="asc">Sort A - Z</option>
            <option value="desc">Sort Z - A</option>
          </select>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedUsers.map(user => (
            <div
              key={user.id}
              className="bg-gray-50 border rounded-xl p-4 shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-2">
                {user.address.city}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
          >
            Prev
          </button>

          <span className="text-gray-700 font-medium">
            Page {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
