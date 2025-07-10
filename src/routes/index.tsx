import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "@/pages/User";
import Tasks from "@/pages/Tasks";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "users",
        Component: User,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        index: true,
        Component: Tasks,
      },
    ],
  },
]);

export default router;
