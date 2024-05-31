import HomeSection from "./pages/HomeSection"
// import Dashboard from "./pages/Dashboard"
import SignUpPage from "./pages/SignUpPage"
import Events from "./Components/Events"
// import Message from "./Components/Messages" // should be in the dashboard page

const App: React.FC = () => {
	return (
		<>
			<HomeSection />
			{/* <Dashboard />  */}
			<SignUpPage />
      		<Events />
			{/* <Message /> this  should be in the dashboard page*/} 
		</>
	)
}

export default App
