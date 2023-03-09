import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Registration from "./Components/Registration";
import ResetPassword from "./Components/ResetPassword";
import ProductList from "./Components/lists/ProductList";
import PostAndComments from "./Components/lists/PostAndComments";
import UserList from "./Components/lists/UserList";


const myRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <Registration /> },
  { path: "/reset", element: <ResetPassword /> },
  { path: "/product", element: <ProductList /> },
  { path: "/post", element: <PostAndComments /> },
  { path: "/user", element: <UserList /> }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
