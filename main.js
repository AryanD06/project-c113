function preload(){

};
function setup(){
    canvas=createCanvas(640,450);
    canvas.position(470,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,640,450);
    tint(tint_color);
    circle(70,70,50);
    stroke(0,250,0);
    fill(250,0,0);
    circle(570,70,50);
    stroke(0,250,0);
    fill(250,0,0);
    circle(70,380,50);
    stroke(0,250,0);
    fill(250,0,0);
    circle(570,380,50);
    stroke(0,250,0);
    fill(250,0,0);
    rect(92,55,457,30);
    rect(92,365,457,30);
    rect(60,60,30,330);
    rect(550,60,30,330);
}
function take_snapshot(){
    save("pic.png");
}
function filter_tint(){
    tint_color=document.getElementById("colour_name").value;
}