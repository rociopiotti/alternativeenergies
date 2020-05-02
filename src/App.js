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
import Description from "./components/Description/Description"
function App() {
  return (
    <div className="App">
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
      {/* <Description/> */}
    </div>
  );
}

export default App;
