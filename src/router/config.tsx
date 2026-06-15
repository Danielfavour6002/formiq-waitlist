import type { RouteObject } from "react-router-dom";
import Home from "../pages/home/page";
import PrivacyPolicy from "../pages/privacy/page";
import Terms from "../pages/terms/page";
import NotFound from "../pages/NotFound";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <Terms /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
