import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="white-division"></div>
                <main>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-header">
                                        <h2 className="card-title text-center">About Joy Me</h2>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-justify">
                                            Joy Me is a personal photo gallery, created in practice form of the JavaScript library called React.
                                        </p>
                                        <p className="card-text text-justify">
                                            If you are interested in seeing the code for this project, you can get it on the GitHub profile of Hernan Demorizi Ureña (@hernanreiq), who was the developer of this web application.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/hernanreiq/Joy-Me" className="btn btn-info my-2 w-100">Project code <i className="fas fa-code"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://bit.ly/hernanreiq" className="btn btn-success my-2 w-100">Visit my portfolio <i className="fas fa-laptop-code"></i></a>
                                        <a href="/" className="btn btn-primary w-100 my-2">Home <i className="fas fa-home"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default About;