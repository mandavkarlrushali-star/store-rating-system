import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      const res = await api.get("/admin/dashboard");

      setStats({
        totalUsers: res.data.totalUsers,
        totalStores: res.data.totalStores,
        totalRatings: res.data.totalRatings,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Admin Dashboard</h1>

        <button
          className="btn btn-danger"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* Statistics Cards */}

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Total Users</h5>
            <h2 className="text-primary">
              {stats.totalUsers}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Total Stores</h5>
            <h2 className="text-success">
              {stats.totalStores}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Total Ratings</h5>
            <h2 className="text-warning">
              {stats.totalRatings}
            </h2>
          </div>
        </div>

      </div>

      {/* Navigation Cards */}

      <div className="row g-4">

        <div className="col-md-3">
          <div
            className="card shadow text-center p-4 h-100"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/add-user")}
          >
            <h4>Add User</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card shadow text-center p-4 h-100"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/add-store")}
          >
            <h4>Add Store</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card shadow text-center p-4 h-100"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/view-users")}
          >
            <h4>View Users</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card shadow text-center p-4 h-100"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/view-stores")}
          >
            <h4>View Stores</h4>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;