import React from 'react'
import SignUpPage from './pages/SignUpPage'
import SignUpSelectionPage from './pages/SignUpSelectionPage'

const App: React.FC = () => {
	  return (
	<div>
	  <h1 className="text-4xl text-center mt-8">FarmDine</h1>
	  <SignUpPage />
	  <SignUpSelectionPage />
	</div>
  )
}

export default App