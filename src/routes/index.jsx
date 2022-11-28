import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";

export function Routes() {
  return (
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
}
