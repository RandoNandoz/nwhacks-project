import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Navbar.css'

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {sendReminderByTime} from "./backend/remindMe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// sendMsgOnDate(
//     new Date(2023, 1, 21, 4, 45),
//     "succulent",
//     parsePhoneNumber("+16047049500", "US")
// )

sendReminderByTime(0)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
