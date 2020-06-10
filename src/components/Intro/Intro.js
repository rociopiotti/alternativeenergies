import React from "react";
import "./Intro.scss";

// CONTEXT
import PageManagerContext from "../../context/context";

class Intro extends React.Component {
  static contextType = PageManagerContext;
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.animationBox = null;

    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    this.context.handleRefs({ backgroundRef: this.animationBox });
  }

  render() {
    return (
      <div className='introBox' ref={(div) => (this.animationBox = div)}>
        <div className='intro'>
          <h1>
            Start energy
            <br /> revolution from your community
          </h1>
          <h3>
            Sustainable technologies have never been so affordable.
            <br /> Produce and exchage energy maximizing the power of renewable
            sources
          </h3>
          <button className='contactBtn'>Contact us</button>
        </div>
      </div>
    );
  }
}
export default Intro;
