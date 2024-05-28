import ContactPage from "./pages/ContactPage"
import HomeSection from "./pages/HomeSection"
// import Dashboard from "./pages/Dashboard"
import SignUpPage from "./pages/SignUpPage"

const App: React.FC = () => {
	return (
		<>
			<HomeSection />
			<ContactPage />
			{/* <Dashboard />  */}
			<SignUpPage />
		</>
	)
}

export default App
