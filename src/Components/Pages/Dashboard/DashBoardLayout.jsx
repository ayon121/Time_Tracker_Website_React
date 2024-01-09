import { NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoCreateSharp } from "react-icons/io5";
import { BsFileBarGraphFill } from "react-icons/bs";
import { AuthContext } from "../../../Providers/Authproviders";
import { useContext } from "react";

const DashBoardLayout = () => {
    const { user, logout } = useContext(AuthContext)
    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }
    return (
        <div className="flex gap-3 font-poppins">
            {/* dashboard */}

            <div className="flex flex-col gap-3 items-center w-1/4 bg-main h-auto justify-between pt-7 border-r-4 border-r-sub_color_1 rounded-r-3xl px-2 ">
                <h1 className="text-sm md:text-xl lg:text-2xl text-white_color text-center px-2">{user?.displayName} WorkShop</h1>
                <hr className="text-white_color px-1 w-full" />
                <NavLink to="/dashboard"><div className="flex items-center gap-2"><span className="text-white_color text-2xl lg:text-3xl"><RxDashboard /></span><h1 className="text-xl lg:text-2xl text-white_color hidden md:block">Dashboard</h1></div></NavLink>
                <hr className="text-white_color px-1 w-full" />
                <NavLink to="/dashboard/create"><div className="flex items-center gap-2 text-white_color"><span className="text-2xl lg:text-3xl"><IoCreateSharp /></span><h1 className="text-xl lg:text-2xl hidden md:block">Create Task</h1></div></NavLink>
                <hr className="text-white_color px-1 w-full" />
                
                {
                    user && <button onClick={handlelogOut} className="text-xl lg:text-3xl py-1 text-white_color">Logout</button>
                        
                }
                <hr className="text-white_color px-1 w-full" />



            </div>
            {/* content */}
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;