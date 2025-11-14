function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffae00ff";
  ctx.fillRect(0, 0, 150, 75);
  ctx.fillStyle = "#ffd900ff";

  ctx.fillRect(0, 0, 10, 10);

  ctx.fillRect(20, 20, 10, 10);
}
function buttonFunction2() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffae00ff";
  ctx.fillRect(0, 0, 200, 200);

  ctx.fillStyle = "#ffd900ff";
    ctx.fillRect(0, 0, 10, 10);
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(40, 40, 10, 10);
    ctx.fillRect(60, 60, 10, 10);
    ctx.fillRect(80, 80, 10, 10);
    
     
    ctx.fillRect(190, 0, 10, 10);
    ctx.fillRect(170, 20, 10, 10);
    ctx.fillRect(150, 40, 10, 10);
    ctx.fillRect(130, 60, 10, 10);
    ctx.fillRect(110, 80, 10, 10);
    

    ctx.fillRect(0, 190, 10, 10);
    ctx.fillRect(20, 170, 10, 10);
    ctx.fillRect(40, 150, 10, 10);
    ctx.fillRect(60, 130, 10, 10);
    ctx.fillRect(80, 110, 10, 10);

    ctx.fillRect(190, 190, 10, 10); 
    ctx.fillRect(170, 170, 10, 10); 
    ctx.fillRect(150, 150, 10, 10); 
    ctx.fillRect(130, 130, 10, 10); 
    ctx.fillRect(110, 110, 10, 10); 
    

}
function buttonFunction3() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffae00ff";
  ctx.fillRect(0, 0, 200, 200);

  ctx.fillStyle = "#ffd900ff";
  for(i=0; i<=200; i+=20){
    ctx.fillRect(i, i, 10, 10);
    ctx.fillRect(200 - i, i, 10, 10);
    ctx.fillRect(i, 200 - i, 10, 10);
    ctx.fillRect(200 - i, 200 - i, 10, 10);
  }
}





