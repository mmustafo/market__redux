// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { loader as HomeLoader } from "./pages/Home";
import { loader as ProductLoader } from "./pages/Product";
import MainLeyaut from "./layout/MainLeyaut"; 
import Product from "./pages/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLeyaut />, 
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader: ProductLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
