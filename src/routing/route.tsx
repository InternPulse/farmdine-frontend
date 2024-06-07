import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "../pages/HomePage"
import Login from "../components/Login"
import ProductSection from "../components/ProductSection"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "login", element: <Login /> },
			{ path: "productListing", element: <ProductSection /> },
		],
	},
])

export default router
