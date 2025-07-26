// pages/admin.js

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You are not logged in");
      return;
    }

    axios
      .get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.user.role === "admin" || res.data.user.role === "superadmin") {
          setUser(res.data.user);
        } else {
          setError("Access denied");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid or expired token");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (error) return <p style={{ padding: "2rem" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Panel</h1>
      {user ? (
        <div>
          <p><b>Welcome,</b> {user.name}</p>
          <p><b>Role:</b> {user.role}</p>
          <button onClick={handleLogout}>Logout</button>
          <p>This page is restricted to admin and superadmin only.</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
