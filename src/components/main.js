import React, { Component } from "react";
import "../assets/css/main.css";
import Image from "./image";
import photo1 from '../assets/img/photo (1).jpg';

class Main extends Component {
    state = {
        current_image: photo1,
        current_caption: 'Invirtiendo en construcción, para mejorar el hogar y aumentar su valor.',
        imagesQuantity: 8,
        all_Images: [],
        caption_images: ['Invirtiendo en construcción, para mejorar el hogar y aumentar su valor.',
            'Una gata durmiendo plácidamente.', 'Protegiendo la naturaleza.',
            'Una abuela felíz de poder cargar a su nieto.', 'Creando un portafolio que sirva de carta de presentación para una persona que quiere mejorar su vida.',
            'Madre soltera construyendo el hogar de sus tres hijos.', 'Gato rubio en un hogar.', 'Foto de graduación de un estudiante universitario.']
    }
    getImagesSRC = () => {
        var images = [];
        for (var i = 1; i <= this.state.imagesQuantity; i++) {
            images.push(require(`../assets/img/photo (${i}).jpg`));
        }
        this.setState({
            all_Images: images
        });
    }

    changeImage = (src, id) =>{
        this.setState({
            current_image: src,
            current_caption: this.state.caption_images[id]
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="white-division"></div>
                <main onLoad={this.getImagesSRC}>
                    <div className="container p-5">
                        <div id="container_current_image">
                            <img src={this.state.current_image} alt="Testing" />
                        </div>
                        <div className="container_caption">
                            <p className="caption">{this.state.current_caption}</p>
                        </div>
                        <div id="container_carousel_images" className="card-columns">
                            {
                                this.state.all_Images.map((image, i) => {
                                    return (
                                        <Image
                                            key={i}
                                            src={image.default}
                                            changeImage={this.changeImage}
                                            id={i}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Main;

