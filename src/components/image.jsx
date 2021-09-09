import React, { Component } from "react";

class Image extends Component {
    select_image = () => {
        this.props.changeImage(this.props.src, this.props.id);
    }
    render() {
        return (
            <React.Fragment>
                <div className="card bg-transparent">
                    <a href="#current">
                        <img src={this.props.src} alt="Happy Carousel For Joy Me" onClick={this.select_image} />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Image;