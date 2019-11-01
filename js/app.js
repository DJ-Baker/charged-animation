// import the little Scene Graph library
import * as sg from './SG.js';
// find the div's we want to use as our 3D Scene containers
var scene = new sg.Scene(document.getElementById("my-scene"));
var charScene = new sg.Scene(document.getElementById("my-character"));
///////////////////////////////////
// Scene 
///////////////////////////////////
// Two panels, set up so they are at 90 degrees to each other along an edge.
// We also tilt the camera, to test that.
var cam = new sg.Camera(25);
cam.position = new sg.Vector(0, 100, 700);
var camYRotation = 0;
cam.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-10, camYRotation, 0));
scene.world.add(cam);
var camStatic = new sg.Camera(25);
camStatic.position = new sg.Vector(0, 100, 700);
charScene.world.add(camStatic);
var p3 = document.createElement("div");
p3.className = "panel2";
p3.style.backgroundImage = "url('./img/smallRocks.png')";
var n3 = new sg.HTMLDivThing(p3);
n3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n3.position = new sg.Vector(0, 100, 0);
n3.scale = new sg.Vector(.75, .75, .75);
charScene.world.add(n3);
var p2 = document.createElement("div");
p2.className = "panel2";
p2.style.backgroundImage = "url('./img/smallBody.png')";
var n2 = new sg.HTMLDivThing(p2);
n2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n2.position = new sg.Vector(0, 100, 0);
n2.scale = new sg.Vector(.75, .75, .75);
charScene.world.add(n2);
var p21 = document.createElement("div");
p21.className = "panel2";
p21.style.backgroundImage = "url('./img/smallHead.png')";
var n21 = new sg.HTMLDivThing(p21);
n21.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n21.position = new sg.Vector(0, 0, 0);
n2.add(n21);
var p21a = document.createElement("div");
p21a.className = "panel2";
p21a.style.backgroundImage = "url('./img/smallHair.png')";
var n21a = new sg.HTMLDivThing(p21a);
n21a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n21a.position = new sg.Vector(0, 0, 0);
n21.add(n21a);
var p21b = document.createElement("div");
p21b.className = "panel2";
p21b.style.backgroundImage = "url('./img/smallLip.png')";
var n21b = new sg.HTMLDivThing(p21b);
n21b.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n21b.position = new sg.Vector(0, 0, 0);
n21.add(n21b);
var p22 = document.createElement("div");
p22.className = "panel2";
p22.style.backgroundImage = "url('./img/smallArm.png')";
var n22 = new sg.HTMLDivThing(p22);
n22.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, -101));
n22.position = new sg.Vector(-1, 10, -1);
n2.add(n22);
var p23 = document.createElement("div");
p23.className = "panel2";
p23.style.backgroundImage = "url('./img/smallBackLeg.png')";
var n23 = new sg.HTMLDivThing(p23);
n23.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n23.position = new sg.Vector(0, 0, 0);
n2.add(n23);
var p23a = document.createElement("div");
p23a.className = "panel2";
p23a.style.backgroundImage = "url('./img/smallBackFoot.png')";
var n23a = new sg.HTMLDivThing(p23a);
n23a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n23a.position = new sg.Vector(0, 0, 0);
n23.add(n23a);
var p24 = document.createElement("div");
p24.className = "panel2";
p24.style.backgroundImage = "url('./img/smallFrontLeg.png')";
var n24 = new sg.HTMLDivThing(p24);
n24.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n24.position = new sg.Vector(0, 0, 0);
n2.add(n24);
var p24a = document.createElement("div");
p24a.className = "panel2";
p24a.style.backgroundImage = "url('./img/smallFrontFoot.png')";
var n24a = new sg.HTMLDivThing(p24a);
n24a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
n24a.position = new sg.Vector(0, 0, 0);
n24.add(n24a);
// we move by -70.7 because after rotation by 45 degrees that's about what we have to move
// to get the edge into the center (hint: cos(45 degrees) = ~0.707)
var p4 = document.createElement("div");
p4.className = "panel image";
p4.style.backgroundImage = "url('./img/woodedBackgroundLeft.png')";
var n4 = new sg.HTMLDivThing(p4);
n4.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 45, 0));
n4.position = new sg.Vector(-70.7, 0, 0);
scene.world.add(n4);
var p41 = document.createElement("div");
p41.className = "panel image";
p41.style.backgroundImage = "url('./img/woodedBackgroundRight.png')";
var n41 = new sg.HTMLDivThing(p41);
n41.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, -90, 0));
n41.position = new sg.Vector(100, 0, 100);
n4.add(n41);
var p4g = document.createElement("div");
p4g.className = "panel image";
p4g.style.backgroundImage = "url('./img/graphicsFloor.png')";
var n4g = new sg.HTMLDivThing(p4g);
n4g.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-90, 0, 0));
n4g.position = new sg.Vector(0, -100, 100);
n4.add(n4g);
var p4g1 = document.createElement("div");
p4g1.className = "panel image";
p4g1.style.backgroundImage = "url('./img/graphicsWave.png')";
var n4g1 = new sg.HTMLDivThing(p4g1);
n4g1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-90, 0, 0));
n4g1.position = new sg.Vector(0, -99, 100);
n4.add(n4g1);
var c1 = document.createElement("div");
c1.className = "panel2";
c1.style.backgroundImage = "url('./img/smallRocks.png')";
var m1 = new sg.HTMLDivThing(c1);
m1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-20, 10, -5));
m1.position = new sg.Vector(30, -80, 80);
m1.scale = new sg.Vector(.15, .15, .15);
scene.world.add(m1);
var c2 = document.createElement("div");
c2.className = "panel2";
c2.style.backgroundImage = "url('./img/smallBody.png')";
var m2 = new sg.HTMLDivThing(c2);
m2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-20, 10, -5));
m2.position = new sg.Vector(30, -80, 80);
m2.scale = new sg.Vector(.15, .15, .15);
scene.world.add(m2);
var c21 = document.createElement("div");
c21.className = "panel2";
c21.style.backgroundImage = "url('./img/smallHead.png')";
var m21 = new sg.HTMLDivThing(c21);
m21.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m21.position = new sg.Vector(0, 0, 0);
m2.add(m21);
var c21a = document.createElement("div");
c21a.className = "panel2";
c21a.style.backgroundImage = "url('./img/smallHair.png')";
var m21a = new sg.HTMLDivThing(c21a);
m21a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m21a.position = new sg.Vector(0, 0, 0);
m21.add(m21a);
var c21b = document.createElement("div");
c21b.className = "panel2";
c21b.style.backgroundImage = "url('./img/smallLip.png')";
var m21b = new sg.HTMLDivThing(c21b);
m21b.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m21b.position = new sg.Vector(0, 0, 0);
m21.add(m21b);
var c22 = document.createElement("div");
c22.className = "panel2";
c22.style.backgroundImage = "url('./img/smallArm.png')";
var m22 = new sg.HTMLDivThing(c22);
m22.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, -101));
m22.position = new sg.Vector(-1, 10, -1);
m2.add(m22);
var c23 = document.createElement("div");
c23.className = "panel2";
c23.style.backgroundImage = "url('./img/smallBackLeg.png')";
var m23 = new sg.HTMLDivThing(c23);
m23.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m23.position = new sg.Vector(0, 0, 0);
m2.add(m23);
var c23a = document.createElement("div");
c23a.className = "panel2";
c23a.style.backgroundImage = "url('./img/smallBackFoot.png')";
var m23a = new sg.HTMLDivThing(c23a);
m23a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m23a.position = new sg.Vector(0, 0, 0);
m23.add(m23a);
var c24 = document.createElement("div");
c24.className = "panel2";
c24.style.backgroundImage = "url('./img/smallFrontLeg.png')";
var m24 = new sg.HTMLDivThing(c24);
m24.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m24.position = new sg.Vector(0, 0, 0);
m2.add(m24);
var c24a = document.createElement("div");
c24a.className = "panel2";
c24a.style.backgroundImage = "url('./img/smallFrontFoot.png')";
var m24a = new sg.HTMLDivThing(c24a);
m24a.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, 0));
m24a.position = new sg.Vector(0, 0, 0);
m24.add(m24a);
let startTime = performance.now();
var flag1 = false;
var camRX = 0;
var camRY = 0;
var camRZ = 0;
var armZ = -101;
var tempZ = 1;
var wavZ = n4g1.position.z;
var wavC = .25;
var flip = .1;
var s5renderFunc = function (t) {
    // time is returned in millisecons.  Lets convert to seconds, so it's more intuitive.
    let dt = (t - startTime) / 1000.0;
    var opMove = function (startT, startR, distX, distY, distZ, rotX, rotY, t) {
        let rateX = distX / (t * 100);
        let rateY = distY / (t * 100);
        let rateZ = distZ / (t * 100);
        let rotRateX = rotX / (t * 100);
        let rotRateY = rotY / (t * 100);
        camRX += rotRateX;
        camRY += rotRateY;
        cam.position = new sg.Vector(startT.x + rateX, startT.y + rateY, startT.z + rateZ);
        cam.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(camRX, camRY, camRZ));
    };
    var wave = function (waveZ, waveC, t) {
        if (waveZ > 143 || waveZ < 100) {
            wavC *= waveC;
        }
        let wavZ = waveZ * wavC;
        let rateW = wavZ / (t * 80);
        n4g1.position = new sg.Vector(0, -99, waveZ + rateW);
    };
    var firsthandwave = function (startR, rotZ, yTran, t) {
        let rateY = yTran / (t * 100);
        let waveRate = rotZ / (t * 100);
        armZ += waveRate;
        m22.position = new sg.Vector(m22.position.x, m22.position.y + rateY, m22.position.z);
        m22.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, armZ));
    };
    var handwave = function (startR, rotZ, t) {
        if (armZ > 1 || armZ < -46) {
            tempZ *= -1;
        }
        let waveRate = rotZ / (t * 100);
        armZ += waveRate * tempZ;
        m22.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0, 0, armZ));
    };
    wave(n4g1.position.z, -1, 3);
    if (dt < 3) {
        cam.position = new sg.Vector(-10, -95, 330);
        camRX = 10;
        camRY = -2;
        cam.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(camRX, camRY, 0));
    }
    else if (dt < 7) {
        opMove(cam.position, new sg.Vector(camRX, camRY, camRZ), 0, 80, 30, -20, 0, 4);
    }
    else if (dt < 11) {
        opMove(cam.position, new sg.Vector(camRX, camRY, camRZ), -15, -65, -80, 10, -10, 4);
    }
    else if (dt < 12) {
        firsthandwave(new sg.Vector(0, 0, armZ), 101, -10, 1);
    }
    else if (dt < 14) {
        handwave(new sg.Vector(0, 0, armZ), -45, .5);
    }
    else if (dt < 15) {
        firsthandwave(new sg.Vector(0, 0, armZ), -100, 10, 1);
    }
    let rotationTime = (dt % 3) / 3;
    let yRotation = 360 * rotationTime;
    //n5.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,yRotation,0)); 
    scene.render();
    charScene.render();
    requestAnimationFrame(s5renderFunc);
};
s5renderFunc(startTime);
//# sourceMappingURL=app.js.map