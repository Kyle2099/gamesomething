import React from "react";

const size = {
    height: "165px",
    backgroundColor: "black"
};
const header = {
    fontFamily: 'Press Start 2P',
    marginTop: "-50px",
    fontSize: "75px",
    color: "blue",
    textAlign: "center",
    fontWeight: "bolder",
    letterSpacing: "15px"
};
const inst = {
    fontFamily: 'Press Start 2P',
    textAlign: "center",
    fontWeight: "bolder",
    color: "orange",
    letterSpacing: "5px"
};


const Jumbotron = () => (
    <div style={size} className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4" style={header}>The Something Game</h1>
            <p className="lead" style={inst}>Click play to review coding techniques and principals!</p>
        </div>
    </div>
);

export default Jumbotron;