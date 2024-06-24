import Events from "../components/Events"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import ProductSection from "../components/ProductSection"
import Subscribe from "../components/Subscribe"
import Partners from "../components/Partners"
import ClientTestimonial from "../components/ClientTestimonial"
import CheckOut from "../components/CheckOut"

const HomePage = () => {
	return (
		<>
			<CheckOut />
			<HomeSection />
			<ProductSection />
			<Events />
			<ClientTestimonial />
			<Partners />
			<Subscribe />
			<Footer />
		</>
	)
}

export default HomePage
