import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
