import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./Components/Login";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Utils/UserContext";
import appStore from "./Utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import MobileDetection from "./Components/MobileDetection";

const Grocery = lazy(() => import("./Components/Grocery"));

const App = () => {
  // Suppose we have some auth code writen and a user logged in how we will modify the user contest in this case we don't want to use default value.

  const [userName, setUserName] = useState();

  useEffect(() =>{
    const data = {
      name : "Parteek"
    }
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
    <div className="app">
      <Header />
      <MobileDetection />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/***
 * Ways to add css :
 *
 * Sass and Scss
 * Styled components
 * Tailwind Css
 *
 * Frameworks :
 * Material UI
 * Chakara UI
 * Bootstrap
 * Chakara UI
 *
 *
 * zustand replacement of Redux.
 *
 *
 */
