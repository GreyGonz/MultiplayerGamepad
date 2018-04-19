var ball;

window.addEventListener("gamepadconnected", function(e) {

  ball = document.getElementById("ball");
  ball.style.backgroundColor = "green";
  ball2 = document.getElementById("ball2");
  ball2.style.backgroundColor = "blue";
  document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
  updateLoop();

});

window.Echo.join('new-player')
  .here((user) => {
    console.log('new user logged!')
  });

function updateLoop() {

  var gp = navigator.getGamepads()[0];
  var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
  var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

  var left2 = (gp.axes[2] + 1) / 2 * (window.innerWidth - ball2.offsetWidth);
  var right2 = (gp.axes[3] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

  ball.style.left = left + "px";
  ball.style.top =  right + "px";

  ball2.style.left = left2 + "px";
  ball2.style.top = right2 + "px";

  if (gp.buttons[5].pressed) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }


  requestAnimationFrame(updateLoop);

}
