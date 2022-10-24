import './App.css';
import Landing from './Components/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Components/Login';
import Home from './Components/Admin';




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
