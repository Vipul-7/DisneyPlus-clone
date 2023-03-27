import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "detail", children: [{ path: ":id", element: <Home /> }] },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
