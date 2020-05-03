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

class App extends React.Component {
  componentWillMount() {
    console.log("App va a ser montada.");
  }

  componentDidMount() {
    console.log("App fue montada.");
  }

  render() {
    return (
      <div className="App">
        {/* <AnimationTest /> */}

        {/* <Sky />
        <Buildings />
        <Mountain />
        <Bushes />
        <City />
        <Rock />
        <Ground /> */}
        <Header />
        {/* <Intro /> */}
        <Forms />
        <Description />
      </div>
    );
  }
}

export default App;
