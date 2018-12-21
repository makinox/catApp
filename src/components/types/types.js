import React from 'react'
import Img1 from '../../assets/types/cat4.svg'
import './types.css'

const TypeCard = () => (
	<div className="types-card">
		<a href="/">Raza siames <span role="img" aria-label="Emoji section">😜</span></a>
	</div>
)

export default () => (
  <>
    <div className="type-header">
      <div>
        <img src={Img1} alt="Breed img" />
      </div>
      <div>
        <h2>Tipos</h2>
      </div>
    </div>
    <div className="type-body">
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
      <TypeCard />
    </div>
  </>
)