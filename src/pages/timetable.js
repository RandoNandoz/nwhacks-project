import "./timetable.css";
import Button from 'react-bootstrap/Button';
import { sendReminderByTime, stopReminders} from "../backend/remindMe";
import {getUser} from "../backend/getUser";

export default function Timetable() {
    console.log(getUser())
    return (
        <div className="table">
            <h1 className="title">
				Plant Watering Schedule
			</h1>
                <Button variant="light" onClick={getUser() !== null ? sendReminderByTime(getUser().uid) : Function.prototype()}
                class="reminderbuttons">Remind me to water my plants</Button>
                <Button variant="light" onClick={getUser() !== null ? stopReminders(getUser().uid) : Function.prototype()}
                class="reminderbuttons">Cancel reminders</Button>

        <div className="calendar">
        <h2 className="month"> January 2023 </h2>
        <table>
            <thead>
                <tr>
                    <th> Sun</th>
                    <th> Mon</th>
                    <th> Tue</th>
                    <th> Wed</th>
                    <th> Thu</th>
                    <th> Fri</th>
                    <th> Sat</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="d1">1</td>
                    <td id="d2">2</td>
                </tr>
                <tr>
                    <td>3
                        <p class="watering-day">Succulent</p>
                    </td>
                    <td id="d3">4</td>
                    <td id="d5">5</td>
                    <td id="d6">6
                    <p class="watering-day">Chinese Money Plant</p>
                    </td>
                    <td id="d7">7</td>
                    <td id="d8">8</td>
                    <td id="d9">9</td>
                </tr>
                <tr>
                    <td id="d10">10</td>
                    <td id="d11">11</td>
                    <td id="d12">12</td>
                    <td id="d13">13
                    <p class="watering-day">Chinese Money Plant</p>
                    </td>
                    <td id="d14">14</td>
                    <td id="d15">15</td>
                    <td id="d16">16</td>
                </tr>
                <tr>
                    <td id="d17">17
                    <p class="watering-day">Succulent</p>
                    </td>
                    <td id="d18">18</td>
                    <td id="d19">19</td>
                    <td id="d20">20
                    <p class="watering-day">Chinese Money Plant</p>
                    </td>
                    <td id="d21">21</td>
                    <td id="d22">22</td>
                    <td id="d23">23</td>
                </tr>
                <tr>
                    <td id="d24">24</td>
                    <td id="d25">25</td>
                    <td id="d26">26</td>
                    <td id="d27"> 27
                    <p class="watering-day">Chinese Money Plant</p>
                    </td>
                    <td id="d28">28</td>
                    <td id="d29">29</td>
                    <td id="d30">30</td>
                </tr>
                <tr>
                    <td id="d31">31
                    <p class="watering-day">Succulent</p>
                    </td>
                    <td id="d32">1</td>
                    <td id="d33">2</td>
                    <td id="d34">3
                    <p class="watering-day">Chinese Money Plant</p>
                    </td>
                    <td id="d35">4</td>
                    <td id="d36">5</td>
                    <td id="d37">6</td>
                </tr>
            </tbody>
        </table>
        </div>
            <script src="timetablelib.ts" async defer></script>
    </div>
    );
}