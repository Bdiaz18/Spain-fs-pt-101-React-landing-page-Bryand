import React from "react";

const MyNavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-dark p-0">
            <div className="container bg-dark p-0">
                <a className="navbar-brand text-light " href="#">Start Bootstrap</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light " href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light " href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light " href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNavBar