import { useEffect, useState } from 'react';
import { useRef } from 'react'
import './Latest.css'
import defaultImage from '../../img/soilDefault.jpg'
import { cardData } from "./soilNews"

function Latest() {

    const news = cardData


    //soilapi does not provide free api calls anymore, so made the news constant in soilNews.js
    //for project
    // useEffect(() => {
    //     const getNews = async () => {
    //         const url = 'https://newsapi.org/v2/everything?q=plants+soil&sortBy=relevance&language=en&excludeSources=fox-news&pageSize=50&apiKey=f280b085be63467a9029bd906bff32d1';
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setNews(data);
    //     }
    //     getNews();
    // }, []);

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.classList.add('slide-up');
    }, []);


    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };

    const [pageLoading, setPageLoading] = useState(false);

    setTimeout(() => {
        setPageLoading(true)
    }, 2000);


    return (

        <div className="latestContainer" style={{ display: "flex", background: "white" }} ref={divRef}>
            {pageLoading ? (
                <>
                    {
                        news.articles.map((article) => (
                            <a href={article.url} className="latestCardcard" key={article.title} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }} target={"_blank"} rel="noreferrer" >
                                <div className="latestCardcard__header">
                                    <img src={article.urlToImage !== null ? article.urlToImage : defaultImage} onError={handleImageError} alt="card__image" className="latestCardcard__image" width="600" />
                                </div>
                                <div className="latestCardcard__body">
                                    <span className="latestCardtag latestCardtag-blue">Soil</span>
                                    <h4>{article.title}</h4>
                                </div>
                            </a>

                        ))

                    }
                </>
            ) : (
                <>
                    <div class="three-body" >
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                    </div>
                    <div style={{ paddingLeft: "1%" }}><h3>Loading Latest News</h3></div>
                </>
            )
            }

        </div >

    )
}


export default Latest;