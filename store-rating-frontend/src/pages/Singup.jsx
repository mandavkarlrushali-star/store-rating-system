function Signup() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4 text-success">
          Signup
        </h2>

        <form>
          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;