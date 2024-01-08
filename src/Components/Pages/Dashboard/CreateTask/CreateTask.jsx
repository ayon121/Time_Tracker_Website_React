

const CreateTask = () => {
    return (
        <div className="w-full mb-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-main text-center mt-4">Create New Task</h1>
            <div className="flex justify-start mt-3">
                <form className="flex flex-col gap-2 px-2  items-start ">
                <label>Task Name</label>
                <input type="text" name="name" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                <label>Task Description</label>
                <textarea className="textarea textarea-info w-full max-w-xs"  placeholder="description"></textarea>
                <label>Complete Date</label>
                <input type="date" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                <input  className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3 mt-2" type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default CreateTask;