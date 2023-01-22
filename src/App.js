import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import Info from './info'
import LogPage from './logpage';
import Timetable from "./timetable";
import Home from './home'
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/info" element={<Info />} />
          <Route path="/pages/LogPage" element={<LogPage />} />
          <Route path="/pages/timetable" element={<Timetable />} />
          <Route path="/pages/login" element={<Login/>} />
        </Routes>
      
    </>
  )
}

export default App;
