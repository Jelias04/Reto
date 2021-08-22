import React from 'react'
import '../../Styles/Crad/Card.css'



function Card(props) {
    return (
        <div className="card text-center my-5">
          <img src={props.imageSource} alt="" className="img" />
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              voluptas dolore? Sint, enim, vel molestiae necessitatibus sequi
              veritatis deleniti tenetur aliquid ex similique repellat quos.
            </p>
            <a href="#!" className="btn btn-outline-secondary">
              mmm! lo quieres?
            </a>
          </div>
        </div>
    );
}

export default Card
