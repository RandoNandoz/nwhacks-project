import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import Info from './pages/info'
import LogPage from './pages/logpage';
import Timetable from "./pages/timetable";
import Home from './pages/home'
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import {sendReminderByTime} from "./backend/remindMe";

function App() {
  onAuthStateChanged(getAuth(), user => {
    if (user) {
     const { currentUser } = getAuth();
     console.log('Currently logged in user', currentUser);
    } else {
      console.log("no");
    }
   })
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

sendReminderByTime(0)

export default App;
