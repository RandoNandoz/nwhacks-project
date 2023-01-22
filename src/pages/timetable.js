import "./timetable.css";

export default function Timetable() {
    return (
        <div class="table">
<h1 class="title">
					Plant Watering Schedule
				</h1>
        <h2 class="month"> January 2021 </h2>
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
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3
                        <p class="watering-day">succulent</p>
                    </td>
                    <td>4</td>
                    <td>5</td>
                    <td>6
                    <p class="watering-day">plant 2</p>
                    </td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13
                    <p class="watering-day">plant 2</p>
                    </td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>17
                    <p class="watering-day">succulent</p>
                    </td>
                    <td>18</td>
                    <td>19</td>
                    <td>20
                    <p class="watering-day">plant 2</p>
                    </td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27
                    <p class="watering-day">plant 2</p>
                    </td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>31
                    <p class="watering-day">succulent</p>
                    </td>
                    <td>1</td>
                    <td>2</td>
                    <td>3
                    <p class="watering-day">plant 2</p>
                    </td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}