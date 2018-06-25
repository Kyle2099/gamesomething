import React from 'react';

class ChildComponent extends React.Component {
    static contextTypes = {
      loop: PropTypes.object,
    };
  
    componentDidMount() {
      this.context.loop.subscribe(this.update);
    }
  
    componentWillUnmount() {
      this.context.loop.unsubscribe(this.update);
    }
  
    update() {
      // tick logic
    };
  }