import axios from "axios";
import { useState } from "react";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "USER",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user);

      await axios.post("http://localhost:3000/users", user);

      alert("User Added Successfully!");

      setUser({
        name: "",
        email: "",
        address: "",
        password: "",
        role: "USER",
      });
    } catch (error) {
      console.log(error.response?.data);

      alert(
        JSON.stringify(
          error.response?.data
        )
      );
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow p-4">
            <h2 className="text-center mb-4">
              Add User
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  value={user.address}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      address: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Role
                </label>
                <select
                  className="form-select"
                  value={user.role}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      role: e.target.value,
                    })
                  }
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="STORE_OWNER">
                    Store Owner
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Add User
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddUser;