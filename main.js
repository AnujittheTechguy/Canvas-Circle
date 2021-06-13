canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mousedown";
    color=document.getElementById("color").value;
    console.log(color);
    console.log("mousedown");
    width_of_line = document.getElementById("width_of_line").value;
    console.log(width_of_line);
    
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    console.log("x = "+mouseX+" ,y = "+mouseY);
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;
        ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
        ctx.stroke();
    } 
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave"
    console.log("mouseleave");
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
    console.log("mouseup");
}


function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}