import React from "react"

function Cards (props) {
    
    function handleSelection(e) {
        const cardclicked = e.target.id;
        props.onClick(cardclicked);
    }

return (
    <button className="card" id={props.value} type="button" onClick={handleSelection}><img src={`../assets/images/${props.value}.png`} className="cardimg" alt=""></img></button>
)

}

export default Cards