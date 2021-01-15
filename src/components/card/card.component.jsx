import React from 'react'
import './card.styles.css'

export const Card = (props) =>(
    <div className="card-container">

        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> <strong>{props.monster.name} </strong> </h2>
        <p><b>{props.monster.email}</b></p>
    </div>
)
