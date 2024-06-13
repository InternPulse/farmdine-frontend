import Events from "../components/Events"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import ProductSection from "../components/ProductSection"
import Subscribe from "../components/Subscribe"
import Partners from "../components/Partners"

const HomePage = () => {
	return (
		<>
			<HomeSection />
			<ProductSection />
			<Events />
			<Partners />
			<Subscribe />
			<Footer />
		</>
	)
}

export default HomePage
