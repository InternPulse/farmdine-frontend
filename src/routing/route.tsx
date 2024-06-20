import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "../pages/HomePage"
import Login from "../components/Login"
import Product from "../components/Product"
import HelpPage from "../pages/HelpPage"
import ContactPage from "../pages/ContactPage"
import SignUpPage from "../pages/SignUpPage"
import Dashboard from "../pages/Dashboard"

const router = createBrowserRouter([
	{ path: "signup", element: <SignUpPage /> },
	{ path: "dashboard", element: <Dashboard /> },
	{ path: "login", element: <Login /> },
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },

			{ path: "productListing", element: <Product /> },
			{ path: "help", element: <HelpPage /> },
			{ path: "contact", element: <ContactPage /> },

			{ path: "*", element: <div>Page Not Found</div> },
		],
	},
])

export default router
