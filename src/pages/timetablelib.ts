import { getUserPlantsFromDb } from "../backend/getUserPlantsFromDb";
import { God } from "../backend/God";

const f = () => {
    getUserPlantsFromDb(God.uid).then (
        (plants) => {
            plants.forEach(
                (plant) => {
                    for (let i = 0; i < 37 % plant.water_every; ++i) {
                        console.log(i)
                        document.getElementById(`d${new Date(Date.now()).getDate() * plant.water_every * i}`).innerHTML =`<p class=\"watering-day\">${plant.name}</p>\n`;
                    }
                }
            )
        }
    )
}

f()