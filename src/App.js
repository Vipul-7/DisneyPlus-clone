import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Root from "./pages/Root";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "detail/:id", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
