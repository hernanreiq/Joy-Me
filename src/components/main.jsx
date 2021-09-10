import React, { Component } from "react";
import "../assets/css/main.css";
import Image from "./image";
import photo1 from '../assets/img/photo (1).jpg';
import Footer from './footer';

class Main extends Component {
    state = {
        current_image: photo1,
        current_caption: 'Investing in construction, to improve the home and increase its value.',
        imagesQuantity: 8,
        all_Images: [],
        caption_images: ['Investing in construction, to improve the home and increase its value.',
            'My cat sleeping peacefully, happy to be in a family that loves her very much.', 'Protecting nature from the worst plague on the planet, humans.',
            'A happy grandmother carrying her grandson.', 'Creation of a portfolio as a presentation tool for knowledge in development and web design.',
            'Single mother building a home for her three children.', 'A blond cat being part of a family that pampers him a lot.', 'Photo of a student\'s college graduation.']
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

    changeImage = (src, id) => {
        this.setState({
            current_image: src,
            current_caption: this.state.caption_images[id]
        });
    }

    render() {
        return (
            <React.Fragment>
                <a name="current" href="#current">
                    <div className="white-division"></div>
                </a>
                <main onLoad={this.getImagesSRC}>
                    <div className="container p-5">
                        <div id="container_current_image">
                            <img src={this.state.current_image} alt={this.state.current_caption} />
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
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;

