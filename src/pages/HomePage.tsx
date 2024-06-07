import Events from "../components/Events"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import ProductSection from "../components/ProductSection"
import Subscribe from "../components/Subscribe"

const HomePage = () => {
	return (
		<>
			<HomeSection />
			<ProductSection />
			<Events />
			<Subscribe />
			<Footer />
		</>
	)
}

export default HomePage
