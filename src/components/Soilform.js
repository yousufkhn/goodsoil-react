import './Soilform.css'
import { useState } from "react";
import Lottie from 'lottie-react';
import Loading from '../lotties/Loading.json';
import NatureBg from '../lotties/NatureBg.json';

function Soilform({ setResultSummary }) {

    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(false);

    setTimeout(() => {
        setPageLoading(true)
    }, 1000);

    function handlesubmit() {
        setLoading(true);
        const config = {
            headers: {
                'x-api-key': "91f6325f2b46202af74cc8d7cbdba7978ba905442055ead76096d0d8b67cc1bb",
                'Content-type': "application/json"
            },
        };

        setTimeout(() => {
            fetch(`https://api.ambeedata.com/ndvi/latest/by-lat-lng?lat=${lat}&lng=${long}`, config)
                .then((response) => response.json())
                .then((json) => {
                    setData([json.data[0].lat, json.data[0].lon, json.data[0].ndvi, json.data[0].evi, json.data[0].summary]);
                })
                .catch((error) => console.log(error));
        }, 3000);

        setTimeout(() => {
            setLoading(false)
        }, 6000)


    }


    return (
        <div className="soilFormContainer" >
            {pageLoading ? (<><div className="background">
                <Lottie
                    className="natureBg"
                    animationData={NatureBg}
                />
            </div>
                <div className="soilForm" style={{ fontSize: "2rem" }}>
                    <h1 className='formHeading'>Soil Quality Analysis</h1>
                    <div className="inputArea">
                        <span style={{ display: "block", margin: "5%", marginTop: "2px" }} >
                            <label htmlFor="latInput">Enter Latitude: </label>
                            <input type="text" id='latInput' className='latInput' onChange={(e) => { setLat(e.target.value) }} placeholder="00.000" />
                        </span>
                        <span style={{ display: "block", margin: "5%" }}>
                            <label htmlFor="longInput">Enter Longitude: </label>
                            <input type="text" id='longInput' onChange={(e) => { setLong(e.target.value) }} className='longInput' placeholder="00.000" />
                        </span>

                        <button className="button-form" onClick={handlesubmit} disabled={!lat || !long}  >Check Soil</button>
                    </div>

                    {loading ? (
                        <Lottie
                            animationData={Loading}
                            style={{ height: "18%", width: "100%", marginTop: "8px", position: "absolute" }}
                        />
                    ) :

                        <div className="result">
                            <div>{data[4]}</div>
                        </div>
                    }
                </div ></>)
                :
                (
                    <>
                        <div class="three-body" style={{ marginTop: "7%", marginLeft: "48%" }}>
                            <div class="three-body__dot"></div>
                            <div class="three-body__dot"></div>
                            <div class="three-body__dot"></div>
                        </div>
                    </>
                )
            }



        </div>
    )
}

export default Soilform;