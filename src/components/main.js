import React, { Component } from "react";
import "../assets/css/main.css";
import photo1 from "../assets/img/photo (1).jpg";
import photo3 from "../assets/img/photo (3).jpg";
import photo4 from "../assets/img/photo (4).jpg";
import photo6 from "../assets/img/photo (6).jpg";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="white-division"></div>
                <main>
                    <div className="container p-5">
                        <div className="card-columns">
                            <div className="card shadow">
                                <img src={photo6} alt="construccion" className="card-img-top" />
                                <div className="card-body text-justify">
                                    <p className="card-text">
                                        Construyendo un hogar
                                    </p>
                                </div>
                            </div>
                            <div className="card shadow">
                                <img src={photo1} alt="construccion" className="card-img-top" />
                                <div className="card-body text-justify">
                                    <p className="card-text">
                                        Construyendo un hogar
                                    </p>
                                </div>
                            </div>
                            <div className="card shadow">
                                <img src={photo3} alt="construccion" className="card-img-top" />
                                <div className="card-body text-justify">
                                    <p className="card-text">
                                        Protegiendo la naturaleza
                                    </p>
                                </div>
                            </div>
                            <div className="card shadow">
                                <img src={photo4} alt="construccion" className="card-img-top" />
                                <div className="card-body text-justify">
                                    <p className="card-text">
                                        Abuela cargando a su nieto
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Main;