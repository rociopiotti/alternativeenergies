import React from "react";
import "./App.scss";
import Sky from "./components/Sky/Sky";
import Buildings from "./components/Buldings/Buildings";
import Mountain from "./components/Mountain/Mountain";
import Bushes from "./components/Bushes/Bushes";
import City from "./components/City/City";
import Rock from "./components/Rock/Rock";
import Ground from "./components/Ground/Ground";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Forms from "./components/Forms/Forms";
import Description from "./components/Description/Description";
import AnimationTest from "./components/AnimationTest/AnimationTest";
// ANIMATION:
import { TweenLite } from "gsap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoBtn: null,
    };
  }

  handleBtnAnimacion() {
    let newEstado;
    if (this.state.estadoBtn === true) {
      newEstado = false;
      console.log("1er Disparo animacion", newEstado);
    } else {
      newEstado = true;
      console.log("2do Disparo animacion", newEstado);
    }
    this.setState({
      estadoBtn: newEstado,
    });
  }
  animateBox() {
    const { mode } = this.state;
    const destX = mode === "CLOSE" ? "90vw" : 0;
    const scale = mode === "CLOSE" ? "scale(2)" : "scale(1)";

    this.myTween = TweenLite.to(this.myElement, 1, {
      x: destX,
      transform: scale,
      onComplete: () => this.handleBtnAnimacion(),
    });
  }
  // componentWillMount() {
  //   console.log("App va a ser montada.");
  // }
  // componentDidMount() {
  //   console.log("App fue montada.");
  // }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleBtnAnimacion.bind(this)} className="btnAnimacion">
          ANIMATE
        </button>
        {/* <AnimationTest /> */}
        {/* <Sky/> */}
        {/* <Buildings /> */}
        {/* <Mountain /> */}
        {/* <Bushes /> */}
        {/* <City /> */}
        {/* <Rock /> */}
        {/* <Ground /> */}
        <Header />
        {/* <Intro /> */}
        <Forms />
        <Description />
      </div>
    );
  }
}

export default App;
