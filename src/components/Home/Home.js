import React from "react";
import home from "./Home.module.css"

const Home = () => {

    let buttonPush = ()=>{
        alert("sjcsjdc")
    }

    return (
        <div className={home.home}>
            <h2 className={home.title}>home</h2>
            <div className={home.buttonBlock}>
                <div className={home.textarea}><textarea></textarea></div>
                <div onClick={buttonPush} className={home.button}><button>Push the button</button></div>
            </div>

        </div>
    )

}

export default Home