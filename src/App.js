import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
