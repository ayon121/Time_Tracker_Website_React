
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { SiTask } from "react-icons/si";
import CountdownTimer from "../TimeCounter/CountdownTimer";

const AllTask = () => {
    const deadline = new Date('2024-01-31T00:00:00');

    return (
        <Link to={`/dashboard/task/id`}  className="w-full mx-auto hover:py-2">
            <div>
                <div className="flex gap-2 items-center justify-between  mt-3 bg-main py-2 px-3 rounded-3xl text-white_color">
                    <h1 className="flex items-center gap-1"><span className="text-white_color"><SiTask /></span> Task 1</h1>
                    <CountdownTimer deadline={deadline}/>
                </div>
            </div>
        </Link>
    );
};

AllTask.propTypes = {

};

export default AllTask;