import React, { Component } from "react";
import "../assets/css/main.css";
import photo1 from '../assets/img/photo (3).jpg';

class Main extends Component {
    state = {
        imagesQuantity: 8,
        all_Images: []
    }
    getImagesSRC = () => {
        var images = [];
        for (var i = 1; i <= this.state.imagesQuantity; i++){
            images.push(require(`../assets/img/photo (${i}).jpg`));
        }
        this.setState({
            all_Images: images
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="white-division"></div>
                <main onLoad={this.getImagesSRC}>
                    <div className="container p-5">
                        <div id="container_current_image">
                            <img src={photo1} alt="Testing" />
                        </div>
                        <div id="container_carousel_images">
                            {
                                this.state.all_Images.map((image, i) => {
                                    return(
                                        <div key={i}>
                                            <img src={image.default} alt="happy carousel"  />
                                        </div>
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

