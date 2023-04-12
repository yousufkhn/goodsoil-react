import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import Soilform from './components/Soilform';
import SoilErosionBlog from './components/SoilErosionBlog/SoilErosionBlog';
import Latest from './components/Latest/Latest';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>
      <div className="appjscontainer">
        <Router>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<FrontPage />} />
            <Route exact path='/geoanalyzer' element={<Soilform />} />
            <Route exact path='/latest' element={<Latest />} />
            <Route exact path='/soilerosion' element={<SoilErosionBlog />}></Route>
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
