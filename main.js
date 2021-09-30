canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mar_images=["mars.jpg", "mars1.jpg" , "mars2.jpg", "mars3.jpg"];
i = Math.floor (Math.random() *4);
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_Image = mar_images[i];
rover_image = "rover.png";
function add(){
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadbackground;
    background_ImgTag.src = background_Image;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadrover;
    rover_ImgTag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
        up();
    }
    if(keypressed == '40'){
        console.log("down");
        down();
    }
    if(keypressed == '37'){
        console.log("left");
        left();
    }
    if(keypressed == '39'){
        console.log("right");
        right();
    }

}

function up(){
    if(rover_y > 0){
        rover_y = rover_y -10;
        console.log("When up key is pressed" + rover_x + "," + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y < 500){
            rover_y = rover_y + 10;
            console.log("When down key is pressed" + rover_x + "," + rover_y);
            uploadbackground();
            uploadrover();
        }
}

function left(){
    if(rover_x > 0){
            rover_x = rover_x - 10;
            console.log("When left key is pressed" + rover_x + "," + rover_y);
            uploadbackground();
            uploadrover();
        }
}

function right(){
    if(rover_x < 700){
            rover_x = rover_x + 10;
            console.log("When right key is pressed" + rover_x + "," + rover_y);
            uploadbackground();
            uploadrover();
        }
}