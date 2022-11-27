import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes></AuthRoutes>
    </BrowserRouter>
  );
}
