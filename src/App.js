import './App.css';
import { createUser, signInUser } from './backend/firebaseAuth';
import { Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import Info from './pages/info'
import LogPage from './pages/logpage';
import Timetable from './pages/timetable';
import Home from './pages/home'
import Login from './pages/login';
import { sendMsgOnDate } from "./backend/scheduleSendMsg";
import {parsePhoneNumber} from "libphonenumber-js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/info" element={<Info />} />
          <Route path="/pages/LogPage" element={<LogPage />} />
          <Route path="/pages/timetable" element={<Timetable />} />
          <Route path="/pages/login" element={<Login/>} />
        </Routes>
      </div>
    </>
  )
}

sendMsgOnDate(
    new Date(2023, 1, 21, 5, 31),
    "succulent",
    "+16047049500",
)
export default App;
