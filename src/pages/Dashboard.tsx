import TopBar from "../components/dashboard/TopBar"
import SideBar from "../components/dashboard/SideBar"

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <TopBar />
      <SideBar />
    </div>
  )
}

export default Dashboard