var mouseEvent="empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color= "blue";
width= 3;
Radius= 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

color=document.getElementById("Color").value;
width=document.getElementById("Width").value;
Radius=document.getElementById("Radius").value;

mouseEvent= "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

mouseEvent= "mouseUP";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

mouseEvent= "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

current_position_of_mouse_x=e.clientx-canvas.offsetleft;

current_position_of_mouse_y=e.clienty-canvas.offsetTop;

if (mouseEvent== "my_mousemove") { 
console.log("Current position of x and y coordinates");
console.log("x = " + current_position_of_mouse_x + "y= "+current_position_of_mouse_y); 
}
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth=width_of_line;
ctx.arc(current_position_if_mouse_x, current_position_of_mouse_y, radius,0, 2*Math.P1);
ctx.stroke();
}

if (mouseEvent= "my_mousedown"){

ctx.beginPath();
ctx.lineWidth= width;
ctx.strokeStyle=color ;
ctx.arc(200,200,30,0, 2*Math.PI);
ctx.stroke();

}