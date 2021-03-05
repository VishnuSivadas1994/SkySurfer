const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

/////Images
const bang = new Image();
bang.src = 'download.png';
//SKY
const backgroundSKY = new Image();
backgroundSKY.src = 'SS_Sky.png';
const BGSKY = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}
//CLOUD
const backgroundCLOUD = new Image();
backgroundCLOUD.src = 'SS_Cloud.png';
const BGCLOUD = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}
//SUN
const backgroundSUN = new Image();
backgroundSUN.src = 'SS_Sun.png';
//Planes
const backgroundP1 = new Image();
backgroundP1.src = 'SS_Plane1.png';
const BGP1 = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}
const backgroundP1 = new Image();
backgroundP1.src = 'SS_Plane1.png';
const BGP1 = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}
const backgroundP1 = new Image();
backgroundP1.src = 'SS_Plane1.png';
const BGP1 = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}
const backgroundP1 = new Image();
backgroundP1.src = 'SS_Plane1.png';
const BGP1 = {
    x1: 0, //pos on x axis
    x2: canvas.width,// pos on x for ssecond background
    y: 0,
    width: canvas.width,
    height: canvas.height
}




function handleBackground() {
    //SKY
    if (BGSKY.x1 <= -BGSKY.width + gameSpeed) BGSKY.x1 = BGSKY.width;
    else BGSKY.x1 -= 1;
    if (BGSKY.x2 <= -BGSKY.width + gameSpeed) BGSKY.x2 = BGSKY.width;
    else BGSKY.x2 -= 1;
    ctx.drawImage(backgroundSKY, BGSKY.x1, BGSKY.y, BGSKY.width, BGSKY.height);
    ctx.drawImage(backgroundSKY, BGSKY.x2, BGSKY.y, BGSKY.width, BGSKY.height);

    //SUN
    ctx.drawImage(backgroundSUN, 0, 0, canvas.width, canvas.height);

    //CLOUD
    if (BGCLOUD.x1 <= -BGCLOUD.width + gameSpeed) BGCLOUD.x1 = BGCLOUD.width;
    else BGCLOUD.x1 -= 3;
    if (BGCLOUD.x2 <= -BGCLOUD.width + gameSpeed) BGCLOUD.x2 = BGCLOUD.width;
    else BGCLOUD.x2 -= 3;
    ctx.drawImage(backgroundCLOUD, BGCLOUD.x1, BGCLOUD.y, BGCLOUD.width, BGCLOUD.height);
    ctx.drawImage(backgroundCLOUD, BGCLOUD.x2, BGCLOUD.y, BGCLOUD.width, BGCLOUD.height);
    
    




}

//Create a gradient for fill styles
// const gradient = ctx.createLinearGradient(0, 0, 0, 70);
// gradient.addColorStop('0.4', '#fff');
// gradient.addColorStop('0.5', '#000');
// gradient.addColorStop('0.55', '#4040ff');
// gradient.addColorStop('0.6', '#000');
// gradient.addColorStop('0.9', '#fff');


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50);
    
    handleBackground();
    
    handleObstacles();
    handleParticles();

    bird.update();
    bird.draw();

    ctx.fillStyle = 'black';
    ctx.font = '90px Geogia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);

    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}
animate();


window.addEventListener('keydown', function (e) {
    console.log(e.code);
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function (e) {
    console.log(e.code);
    if (e.code === 'Space') spacePressed = false;
});



function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = "25px Georgia";
            ctx.fillStyle = 'white';
            ctx.fillText('Game Over, your score is ' + score, 160, canvas.height / 2 - 10);
            return true;
        }
    }
}