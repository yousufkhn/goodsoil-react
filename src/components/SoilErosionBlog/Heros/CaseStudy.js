import './CaseStudy.css'


function CaseStudy() {


    return (
        <div className="caseStudyContainer">
            <div className="caseStudyContentContainer">
                <img className='caseStudytLeftImage' src={require("../../../img/joshimath.jpg")} alt="" />
                {/* <div className="caseStudyHeading">
                    <h1 style={{ fontSize: "3rem" }}>Soil Erosion Case Study</h1>
                </div> */}
                <div className="caseStudyContentText" style={{ padding: "2%", display: "block" }}>
                    <h2 style={{ marginBottom: "2%", fontSize: "2.5rem" }}>The Famous Case of Joshimath Soil Erosion</h2>
                    <h3 style={{ marginBottom: "5%", fontSize: "1.5rem" }}>Background:    Joshimath is a small town located in the Chamoli district of the Indian state of Uttarakhand. In 2021, the region experienced a devastating incident of soil erosion, caused by land cracking that occurred due to heavy rainfall in the region.<br />
                    </h3>
                    <h3 style={{ fontSize: "1.3rem" }}>
                        The main cause of soil erosion in Joshimath is the deforestation of the region. Large areas of forests have been cleared for agriculture, grazing, and construction purposes. This has led to the removal of vegetation cover, which plays a critical role in stabilizing soil and preventing erosion. The absence of plant roots weakens the soil structure, making it more vulnerable to erosion by wind and water.
                    </h3>
                    <a className="learn-more button990" style={{ marginTop: "4.5%", transform: "scale(1)" }} href='https://timesofindia.indiatimes.com/india/joshimath-facing-continuous-problem-of-soil-erosion-and-landslides/articleshow/49170540.cms' target='blank' >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Know More</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;