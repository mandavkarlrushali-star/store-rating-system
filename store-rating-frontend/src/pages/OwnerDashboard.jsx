import { useEffect, useState } from "react";
import axios from "axios";

function OwnerDashboard() {
  const [data, setData] = useState({
    storeName: "",
    averageRating: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/owner/dashboard"
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Store Owner Dashboard</h1>

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

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h5>Store Name</h5>
            <h3 className="text-primary">
              {data.storeName}
            </h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h5>Average Rating</h5>
            <h2 className="text-success">
              {data.averageRating}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h5>Total Ratings</h5>
            <h2 className="text-warning">
              {data.totalRatings}
            </h2>
          </div>
        </div>

      </div>

    </div>
  );
}

export default OwnerDashboard;