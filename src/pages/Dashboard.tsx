
import TopBar from "../components/dashboard/TopBar"
import SidePanel from "../components/dashboard/SidePanel"
import ContentSection from "../components/dashboard/ContentSection";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 gap-2 w-full h-[1024px] pt-2 bg-white">

            {/* LEFT COLUMN */}
            <SidePanel />

            {/* RIGHT COLUMN */}
            <div className="col-span-9 text-center  bg-slate-100 flex-row">
                {/* Top Bar */}
                <TopBar />
                {/* Content Section */}
                <ContentSection />
            </div>
            
        </div>
    )

}

export default Dashboard;