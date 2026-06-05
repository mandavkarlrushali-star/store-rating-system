import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Signup from "../pages/Singup.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Users from "../pages/Users.jsx";
import UserDashboard from "../pages/UserDashboard.jsx";
import OwnerDashboard from "../pages/OwnerDashboard.jsx";

import AddUser from "../components/AddUser.jsx";
import AddStore from "../components/AddStore.jsx";
import ViewUsers from "../components/ViewUsers.jsx";
import ViewStore from "../components/ViewStore.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />

        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-store" element={<AddStore />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/view-stores" element={<ViewStore />} />

        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route
  path="/owner-dashboard"
  element={<OwnerDashboard />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;