import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApodNav from './components/ApodNav';
import ApodHome from './ApodHome'
import Random from "./components/Random";
import Date from "./components/Date";

function App() {
  return (    
      <div className="AppContainer">
        <div className="">
          <ApodNav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ApodHome />} />
            <Route path="/random" element={<Random />} />
            <Route path="/date" element={<Date />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
