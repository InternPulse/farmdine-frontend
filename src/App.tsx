import React from "react"
import Navbar from "./components/Navbar/Navbar"
import HomeSection from "./pages/HomeSection"
// import Dashboard from "./pages/Dashboard"
// import SignUpPage from "./pages/SignUpPage"
import Events from "./components/Events"

const App: React.FC = () => {
	return (
		<>
		<Navbar />
			<HomeSection />
            <Events />
		</>
	)
}

export default App
