import Lottie from "lottie-react";
import chart1 from '../../../../assets/animation/chart2.json'
import chart2 from '../../../../assets/animation/chart9.json'

const Visualize = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 font-poppins mt-3">
            <h1 className="text-2xl md:text-4xl mt-3 text-center text-main">Visualize Your Progress</h1>
            <div className="flex items-center justify-around h-4/5 border-2 mt-3 mb-5 rounded-3xl border-main">
                {/* chart 1 */}
                <div className="">
                    <Lottie animationData={chart1} />
                </div>
                {/* chart 2 */}
                <div>
                    <Lottie animationData={chart2} />
                </div>
            </div>

        </div>
    );
};

export default Visualize;