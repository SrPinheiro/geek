import React from "react";
// components
import SideBar from "../Components/SideBar/SideBar";

import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/*" element={<DefaultRoutes />} />
    </Routes>
  );
};

function DefaultRoutes() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}

function UserRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<h1>userProfile</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
    </Routes>
  );
}
export default Router;
