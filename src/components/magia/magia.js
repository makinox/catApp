import React from 'react'
import Img1 from '../../assets/magia/cat5.svg'
import './magia.css'

const CatImages = (props) => (
  <div className="magia-body-item">
    <img src={props.src} alt={props.alt} />
  </div>
)

export default (props) => (
  <>
    <div className="magia-header">
      <div>
        <img src={Img1} alt="Breed img" />
      </div>
      <div>
        <h2>Galeria magica</h2>
      </div>
    </div>
    <div className="magia-body">
      {console.log(props.cats)}
      {props.cats.map((el, i) => (
        <CatImages src={el.thumb} alt={el.description} key={i}/>
      ))}
    </div>
  </>
)