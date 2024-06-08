import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "../pages/HomePage"
import Login from "../components/Login"
import Product from "../components/Product"
import HelpPage from "../pages/HelpPage"
import ContactPage from "../pages/ContactPage"
// import SignUpPage from "../pages/SignUpPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "login", element: <Login /> },
			{ path: "productListing", element: <Product /> },
			{ path: "help", element: <HelpPage /> },
			{ path: "contact", element: <ContactPage /> },
			// { path: "signup", element: <SignUpPage /> },
		],
	},
])

export default router
