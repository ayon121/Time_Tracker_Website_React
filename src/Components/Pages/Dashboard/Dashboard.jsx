import AllTasks from "./AllTasks/AllTasks";



const Dashboard = () => {
    return (
        <div className="min-h-screen w-4/5 mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-main text-center mt-4">All Tasks</h1>
            <div className="border-4 flex items-center w-full" >
                <AllTasks></AllTasks>
            </div>
        </div>
    );
};

export default Dashboard;