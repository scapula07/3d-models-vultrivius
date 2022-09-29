import logo from './logo.svg';
import './App.css';
import { PerspectiveCamera, PositionalAudio,OrbitControls} from '@react-three/drei'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import BluePrint from './Pages/blueprint';
import Home from './Pages/home';
import Skyscrapper from './Pages/skyscrapper';
import ChicagoBuilding from './Pages/chicagobuilding';
function App() {
 
  return (
    <div className=" flex justify-center items-center h-screen w-screen">
        < Routes>
           <Route exact path="/"  element={<Home  />} >
             <Route exact path="blueprint"  element={< BluePrint  />} />
             <Route exact path="skyscrapper"  element={<Skyscrapper />} />
             <Route exact path="chicagobuilding"  element={<ChicagoBuilding />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
