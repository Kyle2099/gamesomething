import React, { Component } from "react";
import app from "./App.css";
import { Loop, Stage } from 'react-game-kit';




render() {
  return (
    <Loop>
      <Stage>
        <World>
          <Body args={[0,0,75,75]} ref={ (b) => this.body = b.body }>
            // Sprites go here
          </Body>
        </World>
      </Stage>
    </Loop>
  );
}

export default App;
