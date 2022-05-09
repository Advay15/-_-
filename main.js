function preload(){
}

function setup(){
    canvas = createCanvas(800,400);
  
    canvas.position(375, 255);
    video = createCapture(VIDEO);
    video.hide()
}
 function draw() {
    image(video, 175, 50, 475, 315);
    fill(0,175,0);
    stroke(0,175,0);
    circle(20,20,30);
    circle(780,20,30);
    circle(20,380,30);
    circle(780,380,30);
    fill(0,0,0);
    stroke(175,0,0);
    rect(40,10,720,10);
    rect(40,380,720,10);
    rect(10,40,10,320);
    rect(780,40,10,320);

}

function take_snapshot(){
    save('advay.png')
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

function modelLoaded() {
    console.log('PoseNet I Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x " + results[0].pose.nose.x)
        console.log("nose y " + results[0].pose.nose.y)
    }
}

