// constructor(props) {
//   super(props);
//   // reference to the DOM node
//   this.animationBox = null;
//   // reference to the animation
//   this.myTween = null;
//   this.handleRefs = this.handleRefs.bind(this);

//   this.openingAnimation = this.openingAnimation.bind(this);
//   this.state = {
//     refs: {},
//     mode: "CLOSE",
//     isAnimating: false,
//   };
// }
// toggle() {
//   let newMode;
//   let newIsAnimating;

//   if (this.state.mode === "CLOSE") {
//     newMode = "OPEN";
//     newIsAnimating = true;
//   } else {
//     newMode = "CLOSE";
//     newIsAnimating = false;
//   }
//   this.setState({
//     mode: newMode,
//     isAnimating: newIsAnimating,
//   });
//   console.log("Clicked", newMode);
//   console.log("isAnimating", newIsAnimating);
// }

// startsAnimation() {
//   const { mode } = this.state;
//   const destY = mode === "CLOSE" ? "-100vh" : 0;
//   var tl = gsap.timeline({
//     onComplete: () => this.toggle(),
//   });
//   tl.to(this.state.refs.backgroundRef, 1, {
//     y: destY,
//   });
// }

// openingAnimation() {
//   const { mode } = this.state;
//   var tl = gsap.timeline({});
//   tl.to(this.state.refs.backgroundRef, 1, {
//     x: 50,
//   });
// }

///////////////////////////////////////////////////////////

// static contextType = PageManagerContext;
// constructor(props) {
//   super(props);
//   // reference to the DOM node
//   this.animationBox = null;
//   // reference to the animation
//   this.myTween = null; // }
// componentDidMount() {
//   const { openingAnimation, handleRefs } = this.context;
//   openingAnimation({ backgroundRef: this.animationBox });
//   handleRefs({ backgroundRef: this.animationBox });
// }
