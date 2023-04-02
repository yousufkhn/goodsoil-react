import './App.css';
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage/FrontPage';
import Soilform from './components/Soilform';

import SoilErosionBlog from './components/SoilErosionBlog/SoilErosionBlog'
import Latest from './components/Latest/Latest';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import Loading from './lotties/Loading.json';
import Lottie from 'lottie-react';




function App() {

  const [loading, setLoading] = useState(true);

  const LoadingAnimation = (<Lottie
    animationData={Loading}
    style={{ height: "100%", width: "100%", marginTop: "8px" }}
  />)

  setTimeout(() => {
    setLoading(false);
  }, 2000)

  return (
    <>

      <Router>
        <Navbar setLoading={setLoading} />
        <Routes>
          <Route exact path='/' element={<FrontPage />} />
          <Route exact path='/geoanalyzer' element={<Soilform />} />
          <Route exact path='/latest' element={<Latest />} />
          <Route exact path='/soilerosion' element={<SoilErosionBlog />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
