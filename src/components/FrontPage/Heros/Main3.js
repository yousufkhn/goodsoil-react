import './Main3.css'
import { Link } from 'react-router-dom';

function Main3() {
    return (
        <div className="caseStudyContainer">
            <div className="caseStudyContentContainer">
                <img className='caseStudytLeftImage' src={require("../../../img/soilErosionMain.jpg")} alt="" />
                <div className="caseStudyContentText" style={{ padding: "2%", display: "block" }}>
                    <h2 style={{ marginBottom: "2%", fontSize: "3rem" }}>What is Soil Erosion?</h2>
                    <h3 style={{ marginBottom: "5%", fontSize: "1.9rem" }}>Soil erosion is a natural process that occurs when soil is displaced and transported from one location to another. This can be caused by wind, water, or human activities such as farming, construction, and deforestation. While erosion is a natural process, it can become a serious problem when it exceeds the natural rate and causes significant damage to the environment.<br />
                    </h3>
                    <Link to="/soilerosion" ><button className="learn-more button990" style={{ marginTop: "4.5%", transform: "scale(1)" }}  >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Main3;
