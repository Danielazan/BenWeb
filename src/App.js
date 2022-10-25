import './App.css';
import Landing from './Pages/HomeComponent/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Pages/Login';
import Home from './Pages/AdminComponent/Admin';




function App() {
  return (
    <main fluid className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Home' element={<Home/>}/>
          </Routes>
       </BrowserRouter>
    </main>
  );
}

export default App;
