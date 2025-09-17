import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Common/Error/Error";
import ScrollToTop from "./ScrollToTop";
import About from "../Pages/About/About";
import Courses from "../Pages/Courses/Courses";
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <Layout />
        </>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
        ]
    },
]);