import axios from "axios";
import { useEffect, useState } from "react";

function ViewStore() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getStores = async () => {
    setLoading(true);

    try {
      const res = await axios.get("http://localhost:3000/stores");
      setStores(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch stores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">View Stores</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by Store Name or Address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary"></div>
            <p className="mt-2">Loading stores...</p>
          </div>
        ) : filteredStores.length === 0 ? (
          <div className="alert alert-warning text-center">
            No Stores Found
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Store Name</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>

              <tbody>
                {filteredStores.map((store, index) => (
                  <tr key={store.id || index}>
                    <td>{store.id}</td>
                    <td>{store.name}</td>
                    <td>{store.email}</td>
                    <td>{store.address}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default ViewStore;