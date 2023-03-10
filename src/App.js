import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

const router = createBrowserRouter([{ path: "/", element: <Login /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
