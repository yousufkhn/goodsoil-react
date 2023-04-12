import './FrontPage.css'
import OpeningPage from './Heros/OpeningPage'
import Main2 from './Heros/Main2'
import Main3 from './Heros/Main3'



function FrontPage() {


    return (
        <><div className="mobile-message"><h1>This website does not support mobile devices</h1></div>
            <div className="frontPageWholeContainer">
                <OpeningPage />
                <Main2 />
                <Main3 />
            </div>
        </>
    )
}

export default FrontPage;