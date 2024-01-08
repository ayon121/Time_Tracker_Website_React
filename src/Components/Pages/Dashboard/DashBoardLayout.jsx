import { NavLink, Outlet } from "react-router-dom";


const DashBoardLayout = () => {
    return (
        <div className="flex gap-3 font-poppins">
            {/* dashboard */}

            <div className="flex flex-col gap-3 items-center w-1/4 bg-main h-screen justify-start pt-7 border-r-4 border-r-sub_color_1">
                <h1 className="text-sm md:text-2xl lg:text-3xl text-white_color text-center px-2">Ayon WorkShop</h1>
                <hr className="text-white_color px-1 w-full" />
                <NavLink to="/dashboard"><h1 className="text-2xl lg:text-3xl text-white_color">Dashboard</h1></NavLink>
                <hr className="text-white_color px-1 w-full" />


            </div>
            {/* content */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;