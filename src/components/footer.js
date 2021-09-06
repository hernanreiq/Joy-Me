import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="white-division"></div>
                <footer>
                    <div className="container p-4 text-center text-white">
                        <p className="mb-0">Development and Web Design by:&nbsp;
                            <a href="https://bit.ly/hernanreiq" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-warning">Hernan.Reiq</a> <br />
                            All rights reserved &copy;.
                        </p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;