import React from "react";
// components
import SideBar from "../Components/SideBar/SideBar";

// Hooks
import { Routes, Route } from "react-router-dom";
import { GetUser } from "../Hooks/GetUser";

// Pages
import Home from '../Pages/Home/Home'
import ToWatch from "../Pages/ToWatch/ToWatch";
import Favorites from "../Pages/Favorites/Favorites";
import Profile from "../Pages/UserPages/Profile/Profile";
import SingIn from "../Pages/UserPages/SingIn/SingIn";
import SingUp from "../Pages/UserPages/SingUp/SingUp";
import Recommended from "../Pages/recommended/Recommended";


const Router = () => {
  const [user] = GetUser();
  return (
    <Routes>
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/*" element={<DefaultRoutes />} />
      {/* <Route path="/" element={<h1>Ola</h1>} /> */}
      {/* <Route path="/*" element={user ? <DefaultRoutes /> : <Navigate to={"/user/singin"} />} /> */}
    </Routes>
  );
};

function DefaultRoutes() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route  path="/favorites" element={<Favorites />}/>
        <Route  path="/to-watch" element={<ToWatch />}/>
        <Route  path="/recommended" element={<Recommended />}/>
      </Routes>
    </>
  );
}

function UserRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />}/>
    </Routes>
  );
}
export default Router;
