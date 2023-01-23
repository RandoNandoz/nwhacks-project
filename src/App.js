import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import Info from './pages/info'
import LogPage from './pages/logpage';
import Timetable from "./pages/timetable";
import Home from './pages/home'
import Login from './pages/login';
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
// expose twilio token for reset
export default App;
