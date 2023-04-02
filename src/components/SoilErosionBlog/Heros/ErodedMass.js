import './ErodedMass.css';
import { useState } from 'react';

function ErodedMass() {

    const [area, setArea] = useState();
    const [soilHeight, setSoilHeight] = useState();
    const [soilDensity, setSoilDensity] = useState();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOnAreaChange = (event) => {
        setArea(event.target.value);
    }

    const handleOnHeightChange = (event) => {
        setSoilHeight(event.target.value);
    }

    const handleOnDensityChange = (event) => {
        setSoilDensity(event.target.value);
    }

    const handleOnSoilClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        setResult(area * soilHeight * soilDensity);

    }

    return (
        <div className="erodedMassContainer">
            <div className="erodedMassTextContainer">
                <h1 className='erodedMassTextContainerHeading'>Calculating Eroded Soil Mass</h1>
                <h2 className='erodedMassTextContainerText1'>Soil mass is the volume of soil multiplied by its density. The density of soil is affected by its compactness and by how much organic material it contains. To calculate the volume of soil eroded by water runoff in a specific area, measure the square area multiplied by the change in depth.</h2>
                <h4 className='erodedMassTextContainerExample'>For example, if the area in square meters is 20,000 and the lost soil height is 0.01 meters, then: Volume = 20,000 x 0.01 = 200 cubic meters. Assuming the soil density is 150 kilograms per cubic meter, multiplying the volume by the density gives you the eroded soil mass: Mass = 200 x 150 = 30,000 kilograms.</h4>
            </div>
            <div className="erodedMassFormContainer">
                <div className="erodedMassCalculatorForm">
                    <h2 className='erodedMassCalculatorInputHeading'>Area of Soil</h2>
                    <input type="text" placeholder='In Square Metres' className='erodedMassFormInput' value={area} onChange={handleOnAreaChange} />
                    <h2 className='erodedMassCalculatorInputHeading'>Soil height Lost</h2>
                    <input type="text" placeholder='In Metres' className='erodedMassFormInput' value={soilHeight} onChange={handleOnHeightChange} />
                    <h2 className='erodedMassCalculatorInputHeading'>Soil Density</h2>
                    <input type="text" placeholder='In Kilograms Per Cubic Meter' className='erodedMassFormInput' value={soilDensity} onChange={handleOnDensityChange} />
                    <div className="erodedMassFormButtonContainer">
                        <button className='erodedMassFormButton' onClick={handleOnSoilClick}>Calculate</button>
                    </div>
                    {loading === true ? (<><div class="three-body" style={{ marginTop: "6%" }}>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                    </div></>) : (<><div className="erodedMassFormResult">
                        <h1 className="erodedMassFormResult">Eroded Soil Mass : {result} Kilograms</h1>
                    </div></>)}
                </div>
            </div>
        </div>
    )
}

export default ErodedMass;