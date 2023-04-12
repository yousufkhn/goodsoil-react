import './OpeningPage.css'
import Lottie from 'lottie-react';
import treePlantation from '../../../lotties/treePlantation.json';
import Typed from 'typed.js'
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import Weather from '../../../lotties/Weather.json'

function OpeningPage() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['"The soil is the great connector of our lives, the source and destination of all." ',
                '"The nation that destroys its soil destroys itself."',
                '"We have to keep our soil healthy and alive, and we must nourish it because it nourishes us."',
                '"Take care of the land and the land will take care of you."'
            ],
            typeSpeed: 20,
            smartBackspace: true,
            startDelay: 1000,
            shuffle: false,
            loop: true,
            loopCount: Infinity,
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    const [temp, setTemp] = useState(null);

    useEffect(() => {
        const API_KEY = 'c3714d446c4d48d1910122040232903';
        const location = 'Phagwara';

        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
            .then((response) => {
                const temperature = response.data.current.temp_c;
                setTemp(temperature);
            })
    }, []);


    return (
        <>
            <div className="maindiv" style={{ width: "100%", height: "100vh", display: "flex", flexWrap: "nowrap" }}>
                <div style={{ height: "100%", width: "50%", color: "white", opacity: "90%", padding: " 8% 2% 2% 7%", borderRadius: "20px" }}>
                    <h1 style={{ padding: "30px", fontSize: "3rem" }}>Welcome to <span style={{ fontWeight: "bold", color: "#62CDFF", fontSize: "100px" }}>GoodSoil</span></h1>
                    <h1 style={{ padding: "30px", fontSize: "3rem" }}> <span ref={el}></span></h1>
                </div>
                <div style={{ height: "100%", width: "50%", color: "brown", opacity: "50%", paddingTop: "5.2%", overflow: "hidden" }}>
                    <Lottie
                        animationData={treePlantation}
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
                {temp === null ? (<>
                    <button className="button-34" style={{ zIndex: "2000", display: "flex", alignItems: "center" }}>
                        <Lottie
                            animationData={Weather}
                            style={{ width: "50px", paddingTop: "7%", paddingRight: "5%" }}
                        />
                        Loading
                    </button>
                </>) :
                    (<button className="button-34" style={{ zIndex: "2000", display: "flex", alignItems: "center" }}>
                        <Lottie
                            animationData={Weather}
                            style={{ width: "50px", paddingTop: "7%", paddingRight: "5%" }}
                            height={400}
                            width={400}
                        />
                        Phagwara {temp}° C
                    </button>)
                }

            </div>

        </>
    )
}

export default OpeningPage;
