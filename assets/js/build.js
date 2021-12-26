var Particle = (function () {
    function Particle(x1, y1) {
        this.opacity = 0;
        this.c = color(255, 0, 0);
        this.x = x1;
        this.y = y1;
        this.startX = this.x;
        this.startY = this.y;
        this.d = Math.ceil(random(1, 11));
        this.off = this.y;
        this.increment = random(0.0005, 0.0015);
    }
    Particle.prototype.display = function () {
        this.move();
        this.updateOpacity();
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    };
    Particle.prototype.move = function () {
        this.x++;
        if (this.off == this.y)
            this.initialNoise = noise(this.off);
        this.y = Math.ceil(this.startY + (noise(this.off) * height - this.initialNoise * height));
        this.off += this.increment;
    };
    Particle.prototype.updateOpacity = function () {
        this.opacity = Math.ceil(map(this.x, 0, width, 0, 255));
    };
    return Particle;
}());
var ParticleSystem = (function () {
    function ParticleSystem(particleXOff1, particleYOff1, hueIncrement1) {
        this.particles = [];
        this.spawnSeconds = 0.1;
        this.spawnTimer = 0;
        this.hue = 0;
        this.particleXOff = particleXOff1;
        this.particleYOff = particleYOff1;
        this.hueIncrement = hueIncrement1;
    }
    ParticleSystem.prototype.display = function () {
        this.updateParticles();
        this.spawnParticles();
    };
    ParticleSystem.prototype.spawnParticles = function () {
        this.spawnTimer++;
        if (this.spawnTimer > 60 * this.spawnSeconds) {
            this.particles.push(new Particle(this.particleXOff, height / 2 + this.particleYOff));
            this.spawnTimer = 0;
        }
    };
    ParticleSystem.prototype.updateParticles = function () {
        colorMode(HSB, 360, 100, 100);
        this.hue += this.hueIncrement;
        if (this.hue > 360)
            this.hue = 0;
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
            this.particles[i].c = color(this.hue, 100, 100, this.particles[i].opacity);
            if (this.particles[i].x > width)
                this.particles.splice(i, 1);
        }
        colorMode(RGB, 255);
    };
    return ParticleSystem;
}());
var canvas;
var system1;
var system2;
var system3;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    pixelDensity(1);
    background(0);
    system1 = new ParticleSystem(0, int(random(-100, 100)), 0.1);
    system2 = new ParticleSystem(0, int(random(-100, 100)), 0.3);
    system3 = new ParticleSystem(0, int(random(-100, 100)), 0.05);
}
function draw() {
    fill(0, random(15, 35));
    rect(0, 0, width, height);
    system1.display();
    system2.display();
    system3.display();
    fill(0);
    textSize(25);
    rect(15, 15, textWidth("60 FPS"), 20);
    fill(255);
    text(Math.ceil(frameRate()) + " FPS", 15, 35);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=build.js.map