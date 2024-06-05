import Footer from "./components/Footer"
import HomeSection from "./components/HomeSection"
import Navbar from "./components/Navbar"
import ProductSection from "./components/ProductSection"
import Subscribe from "./components/Subscribe"
import Events from "./components/Events"
import HelpPage from "./pages/HelpPage"

function App() {
	return (
		<>
			<Navbar />
			<HomeSection />
			<ProductSection />
			<Events />
			<Subscribe />
			<Footer />
			<HelpPage />
		</>
	)
}

export default App
