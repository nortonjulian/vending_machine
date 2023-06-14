import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message"

function FreshSardines() {
    return (
        <div>
            <img
                src="https://cdn.shopify.com/s/files/1/1111/6422/products/WhatsAppImage2023-03-02at9.08.02PM.jpg?v=1677825576"
                alt="Sardines"
            />
            <Message>
                <h1>You don't eat the sardines. The sardines, they eat you!</h1>
                <h1><Link to="/">go back</Link></h1>
            </Message>
        </div>
    )
}

export default FreshSardines
