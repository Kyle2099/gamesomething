import React from "react";

const style = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    width: "100%",
    height: "60px",
    marginTop: "0px"
};
const font = {
    color: "blue",
    fontWeight: "bold",
    fontFamily: 'Contrail One',
    fontSize: "30px",
    marginTop: "10px",
    textAlign: "center",
    textShadow: "2px 2px orange"
};


const Footer = () => (
<footer style={style} className="footer">
		<div style={font} className="container">
			<span>Username:(username) | High Score: (highscore) </span>
		</div>
	</footer>
)

export default Footer;