import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import Error from "./src/components/Error/Error";
import RestaurantMenu from "./src/components/Restaurants/RestaurantMenu/RestaurantMenu";

//routes
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/", //Home
        element: <Body/> 
      },
      {
        path:"/about", //About
        element: <About/> 
      },
      {
        path:"/contact", //Contact
        element: <Contact/> 
      }
    ],
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantMenu/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
 