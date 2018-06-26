import React from "react";

const style = {
    color: "blue",
    height: "40px",
    backgroundColor: "grey",
    fontWeight: "bold",
    fontFamily: 'Contrail One',
    textAlign: "center",
    textShadow: "1px 1px orange"
};


const NavBar = () => (
    <nav style={style} className="navbar navbar-expand-lg">
        <a style={style} className="navbar-brand" >Something Game!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" >Review Coding While Having Fun!<span className="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a style={style} class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;