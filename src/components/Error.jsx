import React, { Component } from "react";

class Error extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="white-division"></div>
                <main>
                    <div className="container p-5 text-white text-center">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="card bg-dark shadow">
                                    <div className="card-header">
                                        <h2 className="display-3">Error 404</h2>
                                    </div>
                                    <div className="card-body">
                                        <p className="h2">The requested page does not exist</p>
                                    </div>
                                    <div className="card-footer">
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

export default Error;