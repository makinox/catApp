import React from 'react'
import './presentation.css'

export default (props) => (
  <div className="presentation">
    <h2>{props.title}</h2>
    <p>{props.text}</p>
    <img src={props.img} alt={props.alt} />
  </div>
)