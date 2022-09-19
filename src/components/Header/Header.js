import React from "react";
import header from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={header.header}>
            <div className={header.logo}>Logo</div>
            <navbar className={header.navbar}>
                <ul className={header.list}>
                    <NavLink to={"./home"} className={header.item}>Home</NavLink>
                    <NavLink to={"./timer"} className={header.item}>Timer</NavLink>
                    <NavLink to={"./categories"} className={header.item}>Categories</NavLink>
                    <NavLink to={"./about"} className={header.item}>About us</NavLink>
                    <NavLink to={"./contact"} className={header.item}>Contact us</NavLink>
                </ul>
            </navbar>
        </div>
    )

}


export default Header