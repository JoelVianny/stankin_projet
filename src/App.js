import './App.css';
import NavBar from "./component/navbar/NavBar";
import Section from "./component/section/Section";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Team from "./pages/Team";
// import Modal from './pages/Modal';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
       <NavBar/>
       <Routes>
           <Route path='/team' element={<Team/>} />
           <Route path='/' element={<Section/>} />
           <Route path='/login' element={<Login/>} />
           {/*<Route path='/modal' element={<Modal/>} />*/}
       </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
