song = "";

function preload()
{
	
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw() 
{
	image(video, 0, 0, 600, 500);
}