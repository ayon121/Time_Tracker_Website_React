import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import TimeManager from "./TimeManager/TimeManager";
import Visualize from "./Visulize/Visualize";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TimeManager></TimeManager>
            <Visualize></Visualize>
        </div>
    );
};

export default Home;