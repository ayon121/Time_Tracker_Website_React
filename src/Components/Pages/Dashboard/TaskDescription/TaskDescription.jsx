
// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const TaskDescription = () => {
    const [time , settime] = useState(0)
    const [running , setrunning] = useState(true)

    const timer = useRef()

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                settime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(timer.current);
        }

        return () => clearInterval(timer.current);
    }, [running]);


    
    return (
        <div className="min-h-screen px-3">
            <h1 className="text-2xl md:text-3xl text-main mt-7">Task 1</h1>
            <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo fugit nemo similique ipsa dolor exercitationem aut voluptatibus fugiat, quod hic atque perspiciatis? Quibusdam quae reprehenderit doloribus repellat, quas minima omnis.</p>

            <h1 className="text-xl md:text-2xl  my-2 flex items-center gap-2"><span className="text-main"><FaCalendarAlt /></span> Deadline: 
                <span className="text-main">
                    10/12/24
                </span>
            </h1>
            <h1 className="text-xl md:text-2xl  my-2 flex items-center gap-2"><span className="text-main "><IoIosTime /></span> Timer: 
                <span className="text-main">
                    {format(time)}
                </span>
            </h1>
            <div className="flex gap-1">
                <button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3" >{running ? 'Break' : 'Start'}</button>
                <button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Delete</button>
                <button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Update</button>
            </div>

        </div>
    );
};

const format = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
};

TaskDescription.propTypes = {

};

export default TaskDescription;