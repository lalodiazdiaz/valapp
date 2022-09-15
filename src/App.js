import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Weapons from './Components/Weapons';
import Maps from './Components/Maps';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/Weapons" element={<Weapons  />} />
        <Route path="/Maps" element={<Maps  />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
