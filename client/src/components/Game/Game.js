import React from "react";

const div = {
    backgroundColor: "blue",
    marginTop: "-32px"
};
const dimension= {
    height: "500px",
    marginLeft: "285px",
    marginTop: "20px",
    marginBottom:"20px",
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "orange"
};

const Game = () => (
    <div style={div}>
    <img style={dimension} src="http://www.electronicbeats.net/app/uploads/2017/08/80s-games-8bit-music-synths-1200x675.jpeg" alt="game placeholder"></img>
    </div>
);

export default Game;