song1 = "";
song2 = "";
status1 = "";
status2 = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;
scorerightWrist=0;
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose' , gotPosses)
}
function modeLoaded()
{
    console.log('Posenet is Initialized');
}
function gotPosses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;

        console.log("scoreleftWrist = " + scoreleftWrist + " scorerightWrist = " +  scorerightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY );
    }
}
function draw()
{
    image(video,0,0,600,500);
    fill( "#0A0683");
    stroke("#BD0707");
    
    status1 = song1.isPlaying();
    status2 = song2.isPlaying();
    if(scorerightWrist > 0.2)

{
    circle(rightWristX,rightWristY,20);
    song1.stop();

if (status2 == false) 
{
  song2.play();
} else
{
 document.getElementById("song").innerHTML = "Playing  Ranjithame" 
}


}



    if(scoreleftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
     if (status1 == false) 
{
  song1.play();
} else
{
 document.getElementById("song").innerHTML = "Playing  Ramuloo Ramulaa" 
}
        
    }
}

function preload()
{
    song1 = loadSound("music.mp4");
    song2 = loadSound("");

}
