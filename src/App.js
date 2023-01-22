import './App.css';
import { createUser, signInUser } from './backend/firebaseAuth';
import { SignInScreen } from './backend/SignInScreen';
import { Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import Info from './pages/info'
import LogPage from './pages/logpage';
import Timetable from './pages/timetable';
import Home from './pages/home'
import Login from './pages/login';


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

export default App;
