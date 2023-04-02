import './ErosionRate.css'
import { useState } from 'react';

function ErosionRate() {

    const [mass, setMass] = useState();
    const [timePeriod, setTimePeriod] = useState();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOnMassChange = (event) => {
        setMass(event.target.value);
    }

    const handleOnTimeChange = (event) => {
        setTimePeriod(event.target.value);
    }


    const handleOnSoilClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        let calculatedRate = mass / timePeriod;
        setResult(Math.round(calculatedRate * 100) / 100);

    }

    return (
        <div className="erosionRateContainer">
            <div className="erodedRateFormContainer">
                <div className="erodedRateCalculatorForm">
                    <h2 className='erodedRateCalculatorInputHeading'>Eroded Soil Mass</h2>
                    <input type="text" placeholder='In Kilograms' className='erodedRateFormInput' value={mass} onChange={handleOnMassChange} />
                    <h2 className='erodedRateCalculatorInputHeading'>Time Period</h2>
                    <input type="text" placeholder='In Years' className='erodedRateFormInput' value={timePeriod} onChange={handleOnTimeChange} />
                    <div className="erodedRateFormButtonContainer">
                        <button className='erodedRateFormButton' onClick={handleOnSoilClick}>Calculate</button>
                    </div>
                    {loading === true ? (<><div class="three-body" style={{ marginTop: "6%" }}>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                    </div></>) : (<><div className="erodedRateFormResult">
                        <h1 className="erodedRateFormResult">Erosion Rate : {result} Kg Per Year</h1>
                    </div></>)}
                </div>
            </div>
            <div className="erodedRateTextContainer">
                <h1 className='erodedRateTextContainerHeading'>Calculating the Erosion Rate</h1>
                <h2 className='erodedRateTextContainerText1'>The erosion rate measures the amount of soil mass lost over a specified time period. If 30,000 kilograms of soil was lost over four years, then: Erosion rate equals 30,000 divided by 4, or 7,500 kilograms per year. </h2>
                <h4 className='erodedRateTextContainerExample'>To compare erosion rates in different land areas, you need to calculate the rates for a unit area, such as one square meter or one acre. Simply divide the erosion rate by the number of square meters or other square units. Make sure that you use the same type of units in all your calculations, whether it is meters, kilometers, feet, yards or miles.</h4>
            </div>
        </div>
    )
}

export default ErosionRate;