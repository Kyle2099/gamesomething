
import MyGame from "./game.js";
import React from 'react-phaser';


class App extends Component {
    MyGame = React.createClass({
    	render: function () {
			return <game/>;
		}
    });
  }
React.render(<MyGame/>, 'game');

export default App;
