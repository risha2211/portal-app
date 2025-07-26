// pages/superadmin.js

import { useEffect, useState } from "react";
import axios from "axios";

export default function SuperadminPage() {
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
        if (res.data.user.role === "superadmin") {
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
      <h1>Superadmin Console</h1>
      {user ? (
        <div>
          <p><b>Welcome,</b> {user.name}</p>
          <p><b>Role:</b> {user.role}</p>
          <button onClick={handleLogout}>Logout</button>
          <p>This page is restricted to superadmins only.</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
