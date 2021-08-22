import React from 'react'
import Card from "../Card/Card";
import '../../Styles/Cards/Cards.css'

import image1 from '../../assets/imagenes/manzanas.jpg'
import image2 from '../../assets/imagenes/aguacate.jpg'
import image3 from '../../assets/imagenes/banana.jpg'


const cards = [
    {
        id:1,
        title:'Tomate',
        image: image1
    },
    {
        id: 2,
        title: 'Aguacate',
        image: image2
    },
    {
        id: 3,
        title: 'Banana',
        image: image3
    }
]    

function Cards() {
    return (
      <div className="body-cards">
        <h1 className="title-cards">Verduras y Frutas fresca para su mesa y cocina</h1>
        <div className="container d-flex justify-content-center align-items-center h-100 ">
          <div className="row ">
            {cards.map((card) => (
              <div className="col-md-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Cards
