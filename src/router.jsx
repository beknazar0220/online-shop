import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Servis from "./pages/Servis";
import Index from "./practika/Index";
import Sign from "./pages/Sign";
import DetailProduct from "./pages/DetailProduct";
import NotFound from "./pages/NotFound";
import Wishlist from "./practika/Wishlist";
import Cart from "./pages/Cart";
import ChekProduct from "./pages/ChekProduct";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"about",
                element: <About/>,
            },
            {
                path:"contact",
                element: <Contact/>,
            },
            {
                path:"servis",
                element: <Servis/>,
            },
            {
                path:"signup",
                element: <SignUp/>,
            },
            {
                path:"account",
                element: <Index/>,
            },
            {
                path:"sign",
                element: <Sign/>,
            },
            {
                path:"wish",
                element: <Wishlist/>,
            },
            {
                path:"cart",
                element: <Cart/>,
            },
            {
                path:"chek",
                element: <ChekProduct/>
            },
            {
                path:"product/:id",
                element: <DetailProduct/>,
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    },  
]);
