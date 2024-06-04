import Footer from "./components/Footer"
import HomeSection from "./components/HomeSection"
import Navbar from "./components/Navbar"
import ProductSection from "./components/ProductSection"
import Subscribe from "./components/Subscribe"
import Events from "./components/Events"
import CheckOut from "./components/CheckOut"

function App() {
	return (
		<>
			<Navbar />
			<CheckOut />
			<HomeSection />
			<ProductSection />
			<Events />
			<Subscribe />
			<Footer />
		</>
	)
}

export default App
