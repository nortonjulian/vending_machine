import React from "react";
import Message from "./Message"
import { Link } from "react-router-dom";

function Chips() {
    return (
        <div>
          <Message>
                <img
                    src="https://www.lays.com/sites/lays.com/files/2020-11/lays-Classic-small.jpg"
                    alt="Lays chips"
                />
                <h1>
                    <Link to="/">go back</Link>
                </h1>
          </Message>
        </div>
    );
}

export default Chips;
