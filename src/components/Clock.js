import React, { Component } from 'react';
import Clock from 'react-clock';
import './App.css';
import './style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Cadran extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div  className="container" >
        <Clock
          className="text-center"
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Cadran;
