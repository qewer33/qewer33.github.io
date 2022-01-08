var Particle = (function () {
    function Particle(p1, x1, y1) {
        this.opacity = 0;
        this.p = p1;
        this.x = x1;
        this.y = y1;
        this.startX = this.x;
        this.startY = this.y;
        this.d = Math.ceil(this.p.random(1, 20));
        this.c = this.p.color(255, 0, 0);
        this.off = this.y;
        this.increment = this.p.random(0.0005, 0.0015);
    }
    Particle.prototype.display = function () {
        this.move();
        this.updateOpacity();
        this.p.fill(this.c);
        this.p.noStroke();
        this.p.rect(this.x, this.y, this.d, this.d);
    };
    Particle.prototype.move = function () {
        this.x++;
        if (this.off == this.y)
            this.initialNoise = this.p.noise(this.off);
        this.y = Math.ceil(this.startY + (this.p.noise(this.off) * this.p.height - this.initialNoise * this.p.height));
        this.off += this.increment;
    };
    Particle.prototype.updateOpacity = function () {
        this.opacity = Math.ceil(this.p.map(this.x, 0, this.p.width, 0, 255));
    };
    return Particle;
}());
var ParticleSystem = (function () {
    function ParticleSystem(p1, particleXOff1, particleYOff1, hueIncrement1) {
        this.particles = [];
        this.spawnSeconds = 0.3;
        this.spawnTimer = 0;
        this.hue = 0;
        this.p = p1;
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
            this.particles.push(new Particle(this.p, this.particleXOff, this.p.height / 2 + this.particleYOff));
            this.particles[this.particles.length - 1].c = this.p.color(this.hue, 80, 100, this.particles[this.particles.length - 1].opacity);
            this.spawnTimer = 0;
        }
    };
    ParticleSystem.prototype.updateParticles = function () {
        this.p.colorMode(this.p.HSB, 360, 100, 100);
        this.hue += this.hueIncrement;
        if (this.hue > 360)
            this.hue = 0;
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
            this.particles[i].c = this.p.color(this.hue, 70, 100, this.particles[i].opacity);
            if (this.particles[i].x > this.p.width)
                this.particles.splice(i, 1);
        }
        this.p.colorMode(this.p.RGB, 255);
    };
    return ParticleSystem;
}());
var _this = this;
var sketch = function (p) {
    _this.canvas;
    _this.system1;
    _this.system2;
    _this.system3;
    p.setup = function () {
        _this.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        _this.canvas.position(0, 0);
        _this.canvas.style("z-index", "-1");
        p.pixelDensity(1);
        p.background(0);
        _this.system1 = new ParticleSystem(p, -200, Math.ceil(p.random(-100, 100)), 0.1);
        _this.system2 = new ParticleSystem(p, -20, Math.ceil(p.random(-100, 100)), 0.3);
        _this.system3 = new ParticleSystem(p, -350, Math.ceil(p.random(-100, 100)), 0.05);
    };
    p.draw = function () {
        p.fill(45, 60);
        p.rect(0, 0, p.width, p.height);
        _this.system1.display();
        _this.system2.display();
        _this.system3.display();
        p.fill(45);
        p.textSize(15);
        p.rect(15, 13, p.textWidth("60 FPS"), 15);
        p.fill(255);
        p.text(Math.ceil(p.frameRate()) + " FPS", 15, 25);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};
new p5(sketch);
//# sourceMappingURL=build.js.map