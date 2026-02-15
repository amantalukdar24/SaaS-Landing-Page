"use client";
import { useEffect, useState } from "react";

export default function SettingsPage() {

  const [theme, setTheme] = useState("light");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedProfile = localStorage.getItem("profile");

    if (savedTheme) setTheme(savedTheme);
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved!");
  };

  
  const colors =
    theme === "dark"
      ? {
          page: "#0f172a",
          card: "#1e293b",
          text: "#f1f5f9",
          input: "#334155",
          border: "#475569",
        }
      : {
          page: "#f1f5f9",
          card: "#ffffff",
          text: "#0f172a",
          input: "#f8fafc",
          border: "#cbd5e1",
        };

  return (
    <div
      className="min-h-screen flex items-center justify-center transition-all duration-300"
      style={{ backgroundColor: colors.page, color: colors.text }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-2xl p-6 space-y-6"
        style={{ backgroundColor: colors.card }}
      >
        <h1 className="text-2xl font-bold">Settings</h1>

       
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={profile.name}
            onChange={(e)=>setProfile({...profile,name:e.target.value})}
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: colors.input,
              color: colors.text,
              border: `1px solid ${colors.border}`
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={(e)=>setProfile({...profile,email:e.target.value})}
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: colors.input,
              color: colors.text,
              border: `1px solid ${colors.border}`
            }}
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Save Profile
          </button>

        </form>

        
        <div className="flex items-center justify-between pt-4 border-t border-gray-400/30">
          <span className="font-medium">Theme: {theme}</span>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
          >
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
}
