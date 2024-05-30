import HomeSection from "./pages/HomeSection"
// import Dashboard from "./pages/Dashboard"
import SignUpPage from "./pages/SignUpPage"
import Events from "./Components/Events"
import Message from "./Components/Messages"

const App: React.FC = () => {
	return (
		<>
			<HomeSection />
			{/* <Dashboard />  */}
			<SignUpPage />
      		<Events />
			<Message />
		</>
	)
}

export default App
