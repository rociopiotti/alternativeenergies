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

startsAnimation() {
  const { mode } = this.state;
  const destY = mode === "CLOSE" ? "-100vh" : 0;
  var tl = gsap.timeline({
    onComplete: () => this.toggle(),
  });
  tl.to(this.state.refs.backgroundRef, 1, {
    y: destY,
  });
}

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

/////////////////////////////////////////////////////////////////////////////////////////////////////



  // animateBox() {
  //   const { mode } = this.state;
  //   const posUp1 = mode === "UP" ? "+=50vw" : "0vh";
  //   const posUp2 = mode === "UP" ? "-=95vh" : 0;
  //   const posUp3 = mode === "UP" ? "-=50vw" : 0;
  //   const delay = 1;

  //   this.form1Tween = TweenLite.to(this.form1, delay, {
  //     x: posUp1,
  //     y: "8vh",
      
  //   });
  //   this.form2Tween = TweenLite.to(this.form2, delay + 0.2, {
  //     y: posUp2,
     
  //   });
  //   this.form3Tween = TweenLite.to(this.form3, delay + 0.2, {
  //     x: posUp3,
  //     y: 0,
  //     onComplete: () => this.toggle(),
  //   });

  //   console.log("Click form 1", mode);
  // }


  this.title = null;
    this.descriptionText = null;
    this.btnPage = null;
    this.card1 = null;

    this.state = {
      mode: "UP",
      isAnimating: false,
   
    const { mode } = this.state;
    
    const posTitle = mode === "UP" ? "-85vh" : 0;
    const posDescription = mode === "UP" ? "-70vh" : 0;
    const posBtnPage = mode === "UP" ? "-95vh" : 0;
    const posCard1 = mode === "UP" ? "-50vh" : 0;

    const delayTitle = mode === "UP" ? 0 : 0.3;
    const delayDescription = mode === "UP" ? 0.1 : 0.1;
    const delayBtnPage = mode === "UP" ? 0.2 : 0.2;
    const delayCard1 = mode === "UP" ? 0.3 : 0;
    
    const tl = new Timeline();
    