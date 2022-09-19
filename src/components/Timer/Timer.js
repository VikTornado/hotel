import React from "react";
import timer from "./Timer.module.css"
import {logDOM} from "@testing-library/react";

const Timer = () => {
        // // let timerHours = document.querySelectorAll(".hours")
        // let timerHours = (document.getElementById("hours").value)
        // console.log(timerHours)

    return (
        <div className={timer.timer}>
            <h2 className={timer.title}>Timer</h2>
            <div className={timer.timerBlock}>
                <div>
                    <div id="hours" className={timer.hours}>00</div>
                </div>
                <span>:</span>
                <div>
                    <div className={timer.minutes}>00</div>
                </div>
                <span>:</span>
                <div>
                    <div className={timer.seconds}>00</div>
                </div>
            </div>
        </div>
    )

}

export default Timer