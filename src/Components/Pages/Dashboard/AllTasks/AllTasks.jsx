import AllTask from "./AllTask";


const AllTasks = () => {
    return (

        <div className="min-h-screen  w-full md:w-4/5 mx-auto ">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-main text-center mt-4">All Tasks</h1>
            <div className="mt-3 text-center flex flex-col justify-start items-center px-2 ">
                <AllTask></AllTask>
                <AllTask></AllTask>
                <AllTask></AllTask>
                <AllTask></AllTask>
            </div>
        </div>
    );
};

export default AllTasks;