"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router=useRouter();
  useEffect(()=>{
  if(!localStorage.getItem("token")) router.push("/signin");
  },[])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Something went wrong while fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

 
  const totalUsers = users.length;

  const uniqueCompanies = new Set(
    users.map((user:any) => user.company.name)
  ).size;

  const uniqueCities = new Set(
    users.map((user:any) => user.address.city)
  ).size;

  const bizEmails = users.filter((user:any) =>
    user.email.endsWith(".biz")
  ).length;

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg font-semibold animate-pulse">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded-lg shadow">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard Summary
        </h1>

      
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatusCard title="Total Users" value={totalUsers} />

          <StatusCard title="Companies" value={uniqueCompanies} />

          <StatusCard title="Cities" value={uniqueCities} />

          <StatusCard title=".biz Emails" value={bizEmails} />

        </div>
      </div>
    </div>
  );
}


function StatusCard({ title, value }:any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-gray-500 text-sm mb-2">{title}</h2>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
