import './Calculator.css'
import Lottie from 'lottie-react';
import NatureBg from '../lotties/NatureBg.json';


function Calculator(props) {

    console.log(props.resultSummary);
    return (
        <div className="resultContainer">
            <div className="background">
                <Lottie
                    className="natureBg"
                    animationData={NatureBg}
                />
            </div>
            <div className="soilResult">
                <h1 className='resultHeading'>I am result Heading {props.resultSummary}</h1>
            </div>
        </div>
    )
}

export default Calculator;