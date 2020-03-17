let durationAnimation = 2500;
let slowTransition = 1500;
let fastTransition = 1000;
let superfastTransition = 500;

let currentSection = "intro";

let isAnimating = false;
let isAnimating2 = false;

let easing = "easeOutQuint";
let easing2 = "easeInQuint";
let startPage;

let moveLeft = "100%";

let getOut = true;

let intFrameWidth = window.innerWidth;
let intFrameHeight = window.innerHeight;

//MUEVO HOJAS
const moveLeaves = () => {
  isAnimating = true;

  $("#leave1").animate(
    {
      left: moveLeft,
      top: "30vh"
    },
    {
      duration: durationAnimation,
      specialEasing: {
        left: easing2,
        top: easing
      },
      complete: function() {
        isAnimating = false;
      }
    }
  );

  $("#leave2").animate(
    {
      left: moveLeft,
      top: "65vh"
    },
    {
      duration: durationAnimation * 0.5,
      specialEasing: {
        left: easing2,
        top: easing
      },
      complete: function() {}
    }
  );

  $("#leave3").animate(
    {
      left: moveLeft,
      top: "90vh"
    },
    {
      duration: durationAnimation * 0.2,
      specialEasing: {
        left: easing2,
        top: easing
      },
      complete: function() {}
    }
  );

  $("#leave4").animate(
    {
      left: moveLeft,
      top: "52vh"
    },
    {
      duration: durationAnimation * 0.85,
      specialEasing: {
        left: easing2,
        top: easing
      },
      complete: function() {}
    }
  );

  $("#leave5").animate(
    {
      left: moveLeft,
      top: "45vh"
    },
    {
      duration: durationAnimation * 0.3,
      specialEasing: {
        left: easing2,
        top: easing
      },
      complete: function() {}
    }
  );
  $("#leave6").animate(
    {
      left: moveLeft,
      top: "105vh"
    },
    {
      duration: durationAnimation * 0.7,
      specialEasing: {
        left: easing2,
        top: easing2
      },
      complete: function() {
        reinitValuesLeaves();
      }
    }
  );
};

//REINICIO VALORES HOJAS
const reinitValuesLeaves = () => {
  $("#leave1").css({
    position: "absolute",
    top: "20vh",
    left: "-10vw"
  });
  $("#leave2").css({
    position: "absolute",
    top: "37vh",
    left: "-20vw"
  });
  $("#leave3").css({
    position: "absolute",
    top: "40vh",
    left: "-20vw"
  });
  $("#leave4").css({
    position: "absolute",
    top: "45vh",
    left: "-20vw"
  });
  $("#leave5").css({
    position: "absolute",
    top: "55vh",
    left: "-25vw"
  });
  $("#leave6").css({
    position: "absolute",
    top: "75vh",
    left: "-25vw"
  });
};

// RESETEO VALOR BODY
const reinitBodyValue = () => {
  let positionBody = $("body").position();
  $("body").css({
    left: 0
  });
};

//MUEVO FONDO
const moveBackground = () => {
  isAnimating = true;
  moveSky();
  moveBuildings();
  moveMountain();
  moveRock();
  moveCity();
  moveGround();
  moveFloatingForms();
  moveDescription();
};

//MUEVO CIELO
const moveSky = () => {
  $("#sky").animate(
    {
      top: "-20vh"
    },
    {
      queue: true,
      duration: slowTransition * 1.5,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};

//MUEVO EDIFICIOS
const moveBuildings = () => {
  $("#buildings").animate(
    {
      top: "-10vh"
    },
    {
      queue: true,
      duration: slowTransition * 1.6,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};

//MUEVO MONTAÑAS
const moveMountain = () => {
  $("#mountain").animate(
    {
      top: "-15vh"
    },
    {
      queue: true,
      duration: slowTransition * 1.65,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};

//MOVIMIENTO CIUDAD Y TEXTO
const moveCity = () => {
  $("#city").animate(
    {
      top: "-10vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
  $("#aspas").animate(
    {
      top: "-10vh"
    },
    {
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  $(".intro").animate(
    {
      top: "-50vh"
    },
    {
      queue: true,
      duration: fastTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};

//MOVIMIENTO ROCAS.
const moveRock = () => {
  $("#rock").animate(
    {
      top: "-35vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};
//MUEVO TIERRA
const moveGround = () => {
  if (window.matchMedia("(width: 1366px)", "(max-width: 1366px)").matches) {
    $("#ground").animate(
      {
        top: "-111vh",
        left: "-50vw"
      },
      {
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  } else {
    $("#ground").animate(
      {
        top: "-135vh",
        left: "-50vw"
      },
      {
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
};
//MUEVO FORMAS FLOTANTES
const moveFloatingForms = () => {
  isAnimating = true;

  if (window.matchMedia("(width: 1440px)", "(max-width: 1440px)").matches) {
    $("#floatingForm1").animate(
      {
        top: "-100vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  } else {
    $("#floatingForm1").animate(
      {
        top: "-105vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  $("#floatingForm2").animate(
    {
      top: "-80vh"
    },
    {
      duration: slowTransition * 1.2,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  $("#floatingForm3").animate(
    {
      top: "-120vh"
    },
    {
      duration: slowTransition * 1.25,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
};

//MUEVO DESCRIPCION
const moveDescription = () => {
  let moveTop = "-160vh";
  let moveTop2 = "-158vh";

  if (window.matchMedia("(width: 1440px)", "(max-width: 1440px)").matches) {
    $(".about").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );

    $(".aboutDescription").animate(
      {
        top: "14vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  } else {
    $(".about").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );

    $(".aboutDescription").animate(
      {
        top: "10vh"
      },
      {
        queue: true,
        duration: slowTransition * 1.15,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  $(".pageChanger").animate(
    {
      top: "15vh"
    },
    {
      queue: true,
      duration: slowTransition * 1.15,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  $(".appsList").animate(
    {
      top: "55vh"
    },
    {
      queue: true,
      duration: slowTransition * 1.15,
      specialEasing: {
        top: easing
      },
      complete: function() {
        isAnimating = false;
      }
    }
  );
};
//////////////////////////////////////////////// MUEVO PARA ABAJO TODO
const moveDownBackground = () => {
  isAnimating = true;
  console.log("DOWN", isAnimating);
  $("#floatingForm2").animate(
    {
      top: "50vh"
    },
    {
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
  $("#floatingForm1").animate(
    {
      top: "50vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  $("#floatingForm3").animate(
    {
      top: "50vh"
    },
    {
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  if (window.matchMedia("(width: 1024px)", "(min-width: 1024px)").matches) {
    $("#ground").animate(
      {
        top: "-35%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(width: 1280px)", "(min-width: 1280px)").matches) {
    $("#ground").animate(
      {
        top: "-35%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(width: 1366px)", "(min-width: 1366px)").matches) {
    $("#ground").animate(
      {
        top: "-12%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(width: 1440px)", "(max-width: 1440px)").matches) {
    $("#ground").animate(
      {
        top: "-20%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }

  if (window.matchMedia("(width: 1536px)", "(max-width: 1536px)").matches) {
    $("#ground").animate(
      {
        top: "-35%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(min-width: 1538px)").matches) {
    $("#ground").animate(
      {
        top: "-35%",
        left: "-40vw"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing,
          left: easing
        },
        complete: function() {}
      }
    );
  }
  $(".about").animate(
    {
      top: "100vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
  if (window.matchMedia("(width: 1024px)", "(max-width: 1024px)").matches) {
    $("#city").animate(
      {
        top: "16vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  } else {
    $("#city").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  $("#aspas").animate(
    {
      top: "0vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );

  if (window.matchMedia("(width: 1024px)", "(max-width: 1024px)").matches) {
    $("#rock").animate(
      {
        top: "14vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  if (window.matchMedia("(width: 1280px)", "(max-width: 1280px)").matches) {
    $("#rock").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(width: 1366px)", "(max-width: 1366px)").matches) {
    $("#rock").animate(
      {
        top: "6vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }
  if (window.matchMedia("(min-width: 1440px)").matches) {
    $("#rock").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  if (window.matchMedia("(width: 1024px)", "(max-width: 1024px)").matches) {
    $("#buildings").animate(
      {
        top: "16vh"
      },
      {
        queue: true,
        duration: fastTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  } else {
    $("#buildings").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: fastTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  $("#sky").animate(
    {
      top: "0vh"
    },
    {
      queue: true,
      duration: slowTransition,
      specialEasing: {
        top: easing
      },
      complete: function() {}
    }
  );
  if (window.matchMedia("(width: 1024px)", "(max-width: 1024px)").matches) {
    $("#mountain").animate(
      {
        top: "16vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  } else {
    $("#mountain").animate(
      {
        top: "0vh"
      },
      {
        queue: true,
        duration: slowTransition,
        specialEasing: {
          top: easing
        },
        complete: function() {}
      }
    );
  }

  $(".intro").animate(
    {
      top: "15vh"
    },
    {
      queue: true,
      duration: slowTransition * 3,
      specialEasing: {
        top: easing
      },
      complete: function() {
        isAnimating = false;
      }
    }
  );
};

// EVENTO GIRO RUEDA HACIA ABAJO
const printWheelDelta = event => {
  if (isAnimating) {
    return;
  }

  if (event.wheelDelta > 0) {
    switch (currentSection) {
      case "about":
        currentSection = "intro";
        moveDownBackground();
        break;
    }
  } else {
    switch (currentSection) {
      case "intro":
        currentSection = "about";
        moveBackground();
        changeBgrndColor();

        break;
    }
  }
};

//HOVER EN LIST
//CHANGE BACKGROUND COLOR

const changeBgrndColor = () => {
  if (isAnimating2) {
    return;
  }
  $(".card1")
    .on("mouseenter", function() {
      isAnimating2 = true;

      $(".card1").addClass("green");
      $(".card1").removeClass("blue");

      $("#energyDecentralization").animate(
        {
          opacity: "100%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {}
        }
      );
    })
    .on("mouseleave", function() {
      $(".card1").addClass("green");
      $(".card1").addClass("blue");

      $("#energyDecentralization").animate(
        {
          opacity: "0%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {
            isAnimating2 = false;
          }
        }
      );
    });

  $(".card2")
    .on("mouseenter", function() {
      isAnimating2 = true;
      $(".card2").addClass("green");
      $(".card2").removeClass("blue");
      $("#ecoFriendly").animate(
        {
          opacity: "100%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {}
        }
      );
    })
    .on("mouseleave", function() {
      $(".card2").addClass("green");
      $(".card2").addClass("blue");
      $("#ecoFriendly").animate(
        {
          opacity: "0%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {
            isAnimating2 = false;
          }
        }
      );
    });

  $(".card3")
    .on("mouseenter", function() {
      isAnimating2 = true;
      $(".card3").addClass("green");
      $(".card3").removeClass("blue");
      $("#powerExchange").animate(
        {
          opacity: "100%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {}
        }
      );
    })
    .on("mouseleave", function() {
      $(".card3").addClass("green");
      $(".card3").addClass("blue");
      $("#powerExchange").animate(
        {
          opacity: "0%"
        },
        {
          queue: true,
          duration: superfastTransition,
          specialEasing: {
            top: easing
          },
          complete: function() {
            isAnimating2 = false;
          }
        }
      );
    });
};

//LOADER

const loader = () => {
  isAnimating = true;
  var myVar;
  myVar = setTimeout(showPage, 3000);

  function showPage() {
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("page").style.opacity = 1;
    moveLeaves();
  }
};

//BURGER
const burger = () => {
  $(".burger").click(function() {
    $(".nav").slideToggle("fast");
  });
  if (window.matchMedia("(max-width: 1024px)").matches) {
    $(".nav").hide();
  }
};

$(document).on("ready", function() {

  if (window.matchMedia("(max-width: 1024px)").matches) {
    loader(function() {}, {
      complete: function() {
        isAnimating = false;
      }
    });
    burger();
  }


  if (window.matchMedia("(min-width: 1280px)").matches) {
   
    loader(function() {}, {
      complete: function() {
        isAnimating = false;
      }
    });
    burger();

    window.addEventListener("wheel", printWheelDelta);
  }
});
