import './App.css';
import Landing from './Pages/HomeComponent/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Pages/LoginComponent/Login';
import Home from './Pages/AdminComponent/Admin';
import Gallery from  "Pages/GalleryComponent/Gallery"
import Admin from 'Pages/Admin2Component/Admin';




function App() {
  return (
    <main fluid className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Admin' element={<Admin/>}/>
          </Routes>
       </BrowserRouter>
    </main>
  );
}

export default App;
