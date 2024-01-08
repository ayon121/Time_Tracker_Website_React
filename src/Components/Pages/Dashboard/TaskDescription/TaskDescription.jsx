
// import PropTypes from 'prop-types';

const TaskDescription = () => {
    return (
        <div className="min-h-screen px-3">
            <h1 className="text-2xl md:text-3xl text-main mt-4">Task 1</h1>
            <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo fugit nemo similique ipsa dolor exercitationem aut voluptatibus fugiat, quod hic atque perspiciatis? Quibusdam quae reprehenderit doloribus repellat, quas minima omnis.</p>
            <div className="flex gap-1">
                <button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Delete</button>
                <button className="btn btn-sm md:btn-md py-2  border-b-4 border-b-sub_color_1 hover:bg-sub_color_1 hover:border-sub_color_1 hover:text-white_color hover:px-3">Update</button>
            </div>

        </div>
    );
};

TaskDescription.propTypes = {

};

export default TaskDescription;