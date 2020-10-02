import React from "react"
import "./Animal.css"

export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.name}</h3>
        <div className="animal__breed">Breed: {props.dog}</div>
    </section>
)