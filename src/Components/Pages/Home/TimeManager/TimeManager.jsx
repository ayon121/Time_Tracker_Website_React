import Lottie from "lottie-react";
import timeanimation from '../../../../assets/animation/Animation2.json'
const TimeManager = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-5 font-poppins ">

            <div className="flex flex-row-reverse items-center justify-around h-auto">
                {/* content */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl md:text-4xl mt-3">Best <span className="text-main">Time Manager</span> </h1>
                    <div className=" md:hidden block">
                        <Lottie animationData={timeanimation} />
                    </div>
                    <p className="my-2">Empower your success through effective time management. Seize every moment, prioritize tasks, and unlock your full potential. Master the art of balancing work and life, ensuring that every second contributes to your goals. Time is your greatest asset—manage it wisely, and watch your achievements soar</p>
                    <button className="btn btn-sm md:btn-md   border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Explore Now</button>
                </div>
                {/* animation */}
                <div className="hidden md:block">
                    <Lottie animationData={timeanimation} />
                </div>

            </div>

        </div>
    );
};

export default TimeManager;