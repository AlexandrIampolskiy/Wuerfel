
  const RESULT1 = document.getElementById("n1");
  const RESULT2 = document.getElementById("n2");

function rollDice() {

  var d1 = Math.floor(Math.random()*6+1);
  var d2 = Math.floor(Math.random()*6+1);



  RESULT1.style.backgroundImage = "url("+d1+".jpg)";
  RESULT2.style.backgroundImage = "url("+d2+".jpg)";

  document.querySelector(".result").innerHTML = " Sie haben <strong>" + (d2 + d1) + "</strong> Punkte";
};
