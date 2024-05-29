//import HomeSection from "./Components/HomeSection"
import Navbar from "./Components/Navbar/Navbar"
// import Dashboard from "./pages/Dashboard"
// import SignUpPage from "./pages/SignUpPage"
import HomeSection from "./pages/HomeSection"
// import Dashboard from "./pages/Dashboard"
// import SignUpPage from "./pages/SignUpPage"
import Events from "./Components/Events"

const App: React.FC = () => {
	return (
		<>

		<Navbar />
			{/* <HomeSection /> */}

			{/* <Dashboard />  */}
			{/* <SignUpPage /> */}


			<HomeSection />
			{/* <Dashboard />  */}
			{/* <SignUpPage /> */}
            <Events />
		</>
	)
}

export default App;
