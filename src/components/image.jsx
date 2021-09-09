import React, { Component } from "react";
// import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
// import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';

class Image extends Component {
    select_image = () => {
        this.props.changeImage(this.props.src, this.props.id);
    }
    render() {
        return (
            <React.Fragment>
                <div className="card bg-transparent">
                    <img src={this.props.src} alt="Happy Carousel For Joy Me" onClick={this.select_image} />
                </div>
            </React.Fragment>
        )
    }
}

export default Image;