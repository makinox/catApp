import React from 'react'

import img1 from '../../assets/hero/cat.svg'
import Container from '../containers/container-2'
import Footer from '../footer/footer'
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

const Presentation = (props) => (
  <div className="presentation">
    <h2>{props.title}</h2>
    <p>{props.text}</p>
    <img src={props.img} alt={props.alt} />
  </div>
)

export default () => (
  <>
    <div className="index-middleware">

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

    </div>

    <Container className="index-middleware2">
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

    <div className="index-middelware3">

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

        <Container className="index-shop-container">

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
      
    </div>
    <Footer />
  </>
)