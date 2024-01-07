import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import TimeManager from "./TimeManager/TimeManager";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TimeManager></TimeManager>
        </div>
    );
};

export default Home;