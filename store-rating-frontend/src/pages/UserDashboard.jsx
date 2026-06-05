import { useEffect, useState } from "react";
import axios from "axios";

function UserDashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await axios.get("http://localhost:3000/stores");
      setStores(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRating = async (storeId, rating) => {
    try {
      await axios.post("http://localhost:3000/ratings", {
        storeId,
        rating: Number(rating),
      });

      alert("Rating Submitted Successfully");
      fetchStores();
    } catch (error) {
      console.log(error);
      alert("Error submitting rating");
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Dashboard</h2>

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

      <div className="card shadow p-4">

        <h4 className="mb-3">Available Stores</h4>

        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">

            <thead className="table-dark">
              <tr>
                <th>Store Name</th>
                <th>Address</th>
                <th>Overall Rating</th>
                <th>Submit Rating</th>
              </tr>
            </thead>

            <tbody>
              {stores.length > 0 ? (
                stores.map((store) => (
                  <tr key={store.id}>
                    <td>{store.name}</td>
                    <td>{store.address}</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        {store.rating || "No Rating"}
                      </span>
                    </td>

                    <td>
                      <select
                        className="form-select"
                        onChange={(e) =>
                          handleRating(
                            store.id,
                            e.target.value
                          )
                        }
                      >
                        <option value="">
                          Select Rating
                        </option>
                        <option value="1">⭐ 1</option>
                        <option value="2">⭐⭐ 2</option>
                        <option value="3">⭐⭐⭐ 3</option>
                        <option value="4">⭐⭐⭐⭐ 4</option>
                        <option value="5">⭐⭐⭐⭐⭐ 5</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center"
                  >
                    No Stores Available
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}

export default UserDashboard;