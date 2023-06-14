import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message"

function Soda() {
    return (
        <div>
            <img
                src="https://us.coca-cola.com/store/media/catalog/product/1/6/16181_squeeze-ko-can-maria-2.png?quality=80&fit=bounds&height=750&width=700&canvas=700:750"
                alt="Coke Can"
            />
            <Message>
            <h1>OMG SUGARRRRR</h1>
            <h1><Link to="/">go back</Link></h1>
            </Message>
        </div>
    )
}

export default Soda;
