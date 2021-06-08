canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Background_image = "racing.jpeg";
Car_image_1 = "car1.png";
Car_image_2="car1.png";

Car_image_1_width = 100;
Car_image_1_height = 90;
Car_image_2_width = 100;
Car_image_2_height = 90;


Car1_x = 10;
Car1_y = 10;
Car2_x = 20;
Car_x = 20;

function add() {
 Background_img_tag= new Image();

 Background_img_tag.onload= upload_background;

 Background_img_tag.src= Background_image;

 Car_img_tag= new Image();

 Car_img_tag.onload= upload_Car1;
 Car_img_tag.onload= upload_Car2;

 Car_img_tag.src= Car_image;

}


function upload_background() {
    ctx.drawImage(Background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_Car1() {
    ctx.drawImage(Car_img_tag, Car1_x, Car1_y, Car_image_1_width, Car_image_1_height);
}
function upload_Car2() {
    ctx.drawImage(Car_img_tag, Car2_x, Car2_y, Car_image_2_width, Car_image_2_height;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37') {
        car1left();
        console.log("left")
    }

    if(keyPressed == '38') {
        car1up();
        console.log("up")
    }

    if(keyPressed == '39') {
        car1right();
        console.log("right")
    }

    if(keyPressed == '40') {
        car1down();
        console.log("down")
    }
    if(keyPressed == '37') {
        car2left();
        console.log("left")
    }

    if(keyPressed == '38') {
        car2up();
        console.log("up")
    }

    if(keyPressed == '39') {
        car2right();
        console.log("right")
    }

    if(keyPressed == '40') {
        car2down();
        console.log("down")
    }
}



