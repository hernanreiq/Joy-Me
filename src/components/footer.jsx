import React from "react";

function Footer(){
    return (
        <React.Fragment>
            <div className="white-division"></div>
            <footer>
                <div className="container p-4 text-center text-white">
                    <p className="mb-0">Development and Web Design by:&nbsp;
                        <a href="https://bit.ly/hernanreiq" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-warning">Hernan.Reiq</a> <br />
                        All rights reserved &copy;.
                    </p>
                    <a href="/about" className="btn btn-info mt-3">About this <i className="fas fa-info-circle"></i></a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;