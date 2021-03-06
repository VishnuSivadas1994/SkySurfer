const particleArray = [];

const smokeArray = ["black", "gray", "red", "orange", "black", "gray"];

// const random = Math.floor(Math.random() * smokeArray.length);
// console.log(random, smokeArray[random]);


class Particle {
    constructor() {
        this.x = bird.x;
        this.y = bird.y + 20;
        this.size = Math.random() * 8;
        this.speedY = (Math.random() * 1) - 0.5;
        //this.color = 'hsla('+hue+',100%,50%,0.8)';//USe this for Hue
        this.color = smokeArray[Math.floor(Math.random() * smokeArray.length)];

    }
    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function handleParticles() {
    particleArray.unshift(new Particle);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        for (let j = i; j < particleArray.length; j++) {
            //pythagorean theorem
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 20) {
                ctx.beginPath();
                ctx.strokeStyle = particleArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.lineTo(particleArray[j].x, particleArray[j].y);
                ctx.stroke();
                
            }
        }
    }
    if (particleArray.length > 70) {
        for (let i = 0; i < 10; i++) {
            particleArray.pop(particleArray[i]);
        }
    }
}