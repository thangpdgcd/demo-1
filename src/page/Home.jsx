import Content from "./Content/Content";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <>
            {/* Header */}
            <div className="Home">
                <div className="header">
                    <Header />
                </div>
                <div className="slider">
                    <Slider />
                </div>
                <div className="content">
                    <Content />

                </div>
            </div>

        </>
    )
}
export default Home;