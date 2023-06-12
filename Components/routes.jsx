import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Locations from "../Pages/Locations"
import Page404 from "../Pages/Page404"

// défini les routes,  fonction qui est appelé dans index.js
function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<Page404 /> },
        { path: "/about", element: <About />, errorElement:<Page404 /> },
        { path: "/logement", element: <Locations/>, errorElement:<Page404 /> }, 
        { path: "*", element: <Page404/> }  // toutes les routes non trouvées iront vers Page404
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
        
}
export default Routes