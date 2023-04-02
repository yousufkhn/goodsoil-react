import './Causes.css'
import Lottie from 'lottie-react';
import Factories from '../../../lotties/Factories.json';
import Plant from '../../../lotties/Plant.json'
import Wind from '../../../lotties/Wind.json'

function Causes() {
    return (
        <div className='causesContainer'>
            <div className="causesHeadingContainer" style={{ fontSize: "3.5rem ", paddingTop: "7%", justifyContent: 'center', textAlign: "center" }}>
                <h1 style={{ fontSize: "3.5rem " }}>What Causes Soil Erosion</h1>
            </div>
            <div className="factsContainer" style={{ display: "flex", textAlign: 'center' }}>
                <div className="firstContainer" style={{ width: "33%" }}>
                    <Lottie
                        animationData={Factories}
                        style={{ height: "100%", width: "100%", marginTop: "8px" }}
                        height={400}
                        width={400}
                    />
                    <h1>Factories</h1>
                </div>
                <div className="secondContainer" style={{ width: "33%", textAlign: "center" }}>
                    <Lottie
                        animationData={Plant}
                        style={{ height: "100%", width: "70%", margin: "auto" }}
                        height={400}
                        width={400}
                    />
                    <h1>Improper Farming</h1>
                </div>
                <div className="thirdcontainer" style={{ width: "33%" }}>
                    <Lottie
                        animationData={Wind}
                        style={{ height: "100%", width: "70%", margin: "auto" }}
                        height={400}
                        width={400}
                    />
                    <h1>Wind Erosion</h1>
                </div>

            </div>
        </div>
    )
}

export default Causes;