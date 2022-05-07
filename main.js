var mouseEvents = "";
var lastpostion_of_x;
var lastpostion_of_y;
var color = "black";
var width_of_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvents = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvents = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvents = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvents == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates=");
        console.log("x=" + lastpostion_of_x + "y=" + lastpostion_of_y);
        ctx.moveTo(lastpostion_of_x, lastpostion_of_y);

        console.log("Current position of x and y coordinates=");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();


    }

    lastpostion_of_x = current_position_of_mouse_x;
    lastpostion_of_y = current_position_of_mouse_y;
}