import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

import './App.css';
import Dragon from "./dragon";
import Mountain from "./mountain";
import Unicorn from "./unicorn";

class App extends Component {
  enterDragon = () => {
    const tl = new TimelineMax();

    tl.fromTo('#dragon', 1, { x: -200 }, { x: 0 });
    tl.to('#dragon', 1, { x: 700 }, '-=0.3');
    tl.to('#dragon', 1, { y: 300 }, '-=0.5');
    tl.to('#dragon', 1, { rotationY: 180 }, '-=0.5');
    tl.to('#dragon', 1, { x: -300 }, '-=0.2');
    tl.to('#dragon', 1, { rotationY: 0 }, '-=0.1');
    tl.to('#dragon', 1, { x: 200, y: 200 }, '-=0.1');

    return tl;
  }

  enterUnicorn = () => {
    const tl = new TimelineMax();

    tl.set('#unicorn', { zIndex: 3 });
    tl.fromTo('#unicorn', 2, { x: -1200 }, { x: 0 });
    tl.to('#unicorn', 1, { y: -200 }, '-=0.5');
    tl.to('#unicorn', 1, { y: -200 }, '-=0.5');
    tl.to('#unicorn', 1, { rotationY: 180 }, '-=0.5');
    tl.to('#unicorn', 1, { x: -1100 }, '-=0.2');
    tl.to('#unicorn', 1, { rotationY: 0 }, '-=0.1');
    tl.to('#unicorn', 1, { x: -600, y: -200 }, '-=0.1');

    return tl;
  }

  componentDidMount() {
    this.enterDragon();
    this.enterUnicorn();
  }

  render() {

    return (
      <div className="App">
        <Dragon />
        <Mountain />
        <Unicorn />
      </div>
    );
  }
}

export default App;
