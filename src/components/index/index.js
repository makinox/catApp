import React from 'react'

import Presentation from '../presentation/presentation'
import Container from '../containers/container-2'
import img1 from '../../assets/hero/cat.svg'
import './index.css'

const RazaCard = () => (
	<div className="index-raza-card">
		<img src="https://picsum.photos/100/100" alt="Imagenes de razas de gatos" />
		<a href="/">Gato siames</a>
	</div>
)

const TypeCard = () => (
	<div className="index-types-card">
		<a href="/">Raza siames <span role="img" aria-label="Emoji section">😜</span></a>
	</div>
)

const ProductCard = () => (
  <div className="index-shop-item-product">
    <img src="https://picsum.photos/100/100" alt="Producto"/>
    <h4>Producto interesante</h4>
  </div>
)

const CarouselButton = () => (
  <div>
    <span></span>
</div>
)

export default () => (
  <>
    <div className="index-hero-container">
      <div>
        <h1>Todo sobre gatos</h1>
        <p>
          Todo sobre los mejores gatos que puedas encontrar.
          Si eres una amante de los gatos, deberias revisar accesorios de gatos para ti y tu mascota.
        </p>
      </div>
      <div className="index-hero-item">
        <img src={img1} alt="Logo de catapp" />
      </div>
    </div>

    <Container>
      <Presentation
        title="Razas de gatos"
        text="Porque no ver razas de gaticos? seguro que encuentras alguno que no conozcas o una que otra cosa que no sepas"
        img="https://picsum.photos/200/200"
        alt="Imagenes de razas de gatos"
      />

      <div className="index-raza-item">

        <RazaCard />
        <RazaCard />
        <RazaCard />
        <RazaCard />

      </div>
    </Container>

    <Container>
      <div className="index-types-item">
        <TypeCard />
        <TypeCard />
        <TypeCard />
        <TypeCard />
        <TypeCard />
        <TypeCard />
        <TypeCard />
        <TypeCard />
      </div>

      <Presentation
        title="Tipos de gatos"
        text="Porque no ver razas de gaticos? seguro que encuentras alguno que no conozcas o una que otra cosa que no sepas"
        img="https://picsum.photos/200/200"
        alt="Imagenes de razas de gatos"
      />
    </Container>

    <Container>
      
      <Presentation
        title="Compra algo"
        text="Porque no ver razas de gaticos? seguro que encuentras alguno que no conozcas o una que otra cosa que no sepas"
        img="https://picsum.photos/200/200"
        alt="Imagenes de razas de gatos"
      />

      <div className="index-shop-item">
        <div className="index-shop-item-header">
          
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
        <div className="index-shop-item-bottom">

          <CarouselButton />
          <CarouselButton />
          <CarouselButton />

        </div>
      </div>

    </Container>

    <div className="index-news">

      <div>
        <h2>Lee algo?</h2>
      </div>

      <Container>

        <div className="index-types-item">
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
          <TypeCard />
        </div>

        <div className="index-raza-item">

          <RazaCard />
          <RazaCard />
          <RazaCard />
          <RazaCard />

        </div>

      </Container>
    
    </div>
  </>
)