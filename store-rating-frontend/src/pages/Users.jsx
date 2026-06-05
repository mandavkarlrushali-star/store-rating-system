import { useEffect, useState } from "react";
import api from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Users List
      </h1>

      <div className="row">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="col-md-4 mb-4"
            >
              <div className="card shadow h-100">
                <div className="card-body">

                  <h5 className="card-title text-primary">
                    {user.name}
                  </h5>

                  <p className="card-text">
                    <strong>Email:</strong>
                    <br />
                    {user.email}
                  </p>

                  <p className="card-text">
                    <strong>Address:</strong>
                    <br />
                    {user.address}
                  </p>

                  <span className="badge bg-success">
                    {user.role}
                  </span>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">
              No Users Found
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Users;