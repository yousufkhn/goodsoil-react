import './Main2.css'
import Lottie from 'lottie-react';
import Cycling from '../../../lotties/Cycling.json';

function Main2() {
    return (
        <div className="blogContainer">
            <h1 style={{ paddingTop: "7%", fontSize: "3.5rem", width: "100%", display: "inline-flex", margin: "auto", justifyContent: "center" }}>Why Soil is Important?
                <Lottie
                    animationData={Cycling}
                    style={{ height: "70px" }}
                    height={100}
                    width={100}
                /></h1>
            <video src={require("../../../img/whySoilImportant.mp4")} controls autoPlay muted style={{ width: "70%", marginTop: " 20px", height: "70%", marginLeft: "15%" }}>Your Browser Is Not Supporting The Video, Sorry!</video>
        </div>
    )
}

export default Main2;