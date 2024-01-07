import Lottie from "lottie-react";
import clockanimation from '../../../../assets/animation/clock1.json'
const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 font-poppins">
            <div className="flex items-center h-auto justify-around mt-2 mb-3 ">
                {/* banner content */}
                <div className=" w-full md:w-3/4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl py-2 text-left text-main"> Elevate Every Second with Our Intuitive Time Tracking Platform</h1>
                    <div className="md:hidden block ">
                        <Lottie className="h-44" animationData={clockanimation} />
                    </div>
                    <p className="my-2 ">Elevate every second as you effortlessly manage and maximize your productivity. Stay in control of your time, focus on what truly matters, and achieve your goals with precision.</p>
                    <button className="btn btn-sm md:btn-md   border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Join Now</button>
                </div>
                {/* clock animation */}
                <div className="hidden md:block">
                    <Lottie animationData={clockanimation} />
                </div>

            </div>

        </div>
    );
};

export default Banner;