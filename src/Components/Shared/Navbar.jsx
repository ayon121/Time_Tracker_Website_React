
import { useContext } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authproviders";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }


    return (
        <div className=" bg-main font-poppins">
            <div className="navbar max-w-6xl mx-auto px-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-[#FFFFFF] md:text-2xl flex items-center "><span className="text-2xl md:text-3xl">Clock</span> <FcAlarmClock />Wise</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        

                        {
                            user ? <button onClick={handlelogOut} className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Logout</button>
                                :
                                <Link to="/login"><button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Start Now</button></Link>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;