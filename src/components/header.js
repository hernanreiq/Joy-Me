import React, { Component } from "react";
import '../assets/css/header.css';

class header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="text-white bg-dark">
                    <div className="container text-center p-3">
                        <h1 className="display-2 mb-3"><i>Joy Me <i className="far fa-smile-beam"></i></i></h1>
                        <p>Photo gallery that should brighten up your day</p>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default header;