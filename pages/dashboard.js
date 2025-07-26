/ pages/dashboard.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
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
      .then((res) => setUser(res.data.user))
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
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>
          <button onClick={handleLogout}>Logout</button>

          {/* Role-specific sections */}
          {user.role === "student" && (
            <div>
              <h2>Student Dashboard</h2>
              <p>Here are your events, assignments, or classes.</p>
            </div>
          )}

          {user.role === "admin" && (
            <div>
              <h2>🛠 Admin Panel</h2>
              <p>You can manage events, students, or dashboards.</p>
            </div>
          )}

          {user.role === "superadmin" && (
            <div>
              <h2>Superadmin Console</h2>
              <p>You have full control over admins, events, and system settings.</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
