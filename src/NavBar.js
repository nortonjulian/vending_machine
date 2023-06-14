import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact path="/">
                VendingMachine
            </NavLink>
            <NavLink exact path="/soda">
                Soda
            </NavLink>
            <NavLink exact path="/chips">
                Chips
            </NavLink>
            <NavLink exact path="/sardines">
                FreshSardines
            </NavLink>
        </nav>
    )
}

export default NavBar;
