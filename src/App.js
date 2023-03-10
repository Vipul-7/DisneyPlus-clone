import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Root from "./pages/Root";

const router = createBrowserRouter([
  { element: <Root />, children: [{ path: "/", element: <Login /> }] },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
