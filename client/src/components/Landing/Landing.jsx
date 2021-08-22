import React from 'react';
import Video from '../../assets/videos/comercial frutas.mp4';
import { Link } from 'react-router-dom';
import "../../Styles/Landing/Landing.css"

 function Landing() {
    return (
      <div className="body-landing">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            background: "black",
            opacity: 0.4,
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
        <h2 className="titulo">BIENVENIDOS</h2>
        <h3 className="titulo2">Es un gusto atenderle en nustra VERDULERÍA</h3>
        <Link className="btn-pr1" to="/home">
          <button className="btn-pr">Siga Por Favor!</button>
        </Link>
        <h3 className="titulo3"> DEL CAMPO A LA MESA!</h3>
      </div>
    );
}

export default Landing;
