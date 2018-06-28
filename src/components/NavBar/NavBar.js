import React from "react";
import { Button, Modal } from "react-materialize";

const style = {
    backgroundColor: "grey",
    height: "40px",
    textAlign: "center",
    borderBottom: "4px solid blue", 
};
const font = {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "24px",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    height: "250px"
};
const pic = {
    width: "300px",
    margin: "auto"
};
const btn = {
    color: "blue",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    fontWeight: "bold",
    fontSize: "28px"
};


const NavBar = () => (
    <div style={style}>
        <Modal
            style={font}
            header='Please login through Facebook:'
            trigger={<Button style={btn}>Login</Button>}>
            <img style={pic} src="http://machiasnews.com/login_facebook.png" alt="facebook login"></img>
        </Modal>
    </div>
);

export default NavBar;