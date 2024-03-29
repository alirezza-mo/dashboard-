import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Users from "./pages/Users/Users";
import Product from "./pages/product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/Users", element: <Users /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
