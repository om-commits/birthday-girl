/* ==========================================
   HAPPY BIRTHDAY GUDDI ❤️
   SCRIPT.JS - PART 1
========================================== */

// ==========================
// ELEMENTS
// ==========================

const loader = document.getElementById("loader");
const introScreen = document.getElementById("introScreen");
const countdownScreen = document.getElementById("countdownScreen");
const welcome = document.getElementById("welcome");

const startJourney = document.getElementById("startJourney");
const nextBtn = document.getElementById("nextBtn");

const countNumber = document.getElementById("countNumber");
const bgMusic = document.getElementById("bgMusic");

// ==========================
// PAGE LOAD
// ==========================

window.addEventListener("load", function () {

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

            introScreen.style.display = "flex";

        }, 1000);

    }, 3000);

});

// ==========================
// START JOURNEY BUTTON
// ==========================

startJourney.addEventListener("click", function () {

    introScreen.style.display = "none";

    countdownScreen.style.display = "flex";

    startCountdown();

});

// ==========================
// COUNTDOWN
// ==========================

function startCountdown() {

    let number = 3;

    countNumber.innerHTML = number;

    let timer = setInterval(function () {

        number--;

        if (number > 0) {

            countNumber.innerHTML = number;

        } else {

            clearInterval(timer);

            countdownScreen.style.display = "none";

            welcome.style.display = "flex";

            if (bgMusic) {

                bgMusic.volume = 0.5;

                bgMusic.play().catch(function () {});

            }

        }

    }, 1000);

}

// ==========================
// NEXT BUTTON
// ==========================

nextBtn.addEventListener("click", function () {

    welcome.style.display = "none";

    document.getElementById("question").style.display = "flex";

});

// ==========================
// FLOATING HEARTS
// ==========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation = "floatHeart 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 900);

// ==========================
// FLOAT HEART ANIMATION
// ==========================

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatHeart{
0%{
transform:translateY(0) scale(1);
opacity:1;
}
100%{
transform:translateY(-110vh) scale(1.8);
opacity:0;
}
}
`;

document.head.appendChild(style);
/* ==========================================
   SCRIPT.JS - PART 2
   QUESTION • GIFT • LETTER
========================================== */

// ==========================
// ELEMENTS
// ==========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const giftSection = document.getElementById("giftSection");
const giftBox = document.querySelector(".gift-box");

const letterSection = document.getElementById("letterSection");
const envelope = document.querySelector(".envelope");

// ==========================
// NO BUTTON RUNS AWAY
// ==========================

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

});

// ==========================
// YES BUTTON
// ==========================

yesBtn.addEventListener("click", function () {

    document.getElementById("question").style.display = "none";

    giftSection.style.display = "flex";

    createSparkles();

});

// ==========================
// GIFT OPEN
// ==========================

giftBox.addEventListener("click", function () {

    const lid = document.querySelector(".gift-lid");

    lid.style.transform = "translateY(-120px) rotate(-18deg)";

    giftBox.style.transform = "scale(1.15)";

    createSparkles();

    setTimeout(function () {

        giftSection.style.display = "none";

        letterSection.style.display = "flex";

    }, 2000);

});

// ==========================
// ENVELOPE OPEN
// ==========================

envelope.addEventListener("click", function () {

    envelope.classList.toggle("open");

});

// ==========================
// SPARKLES
// ==========================

function createSparkles() {

    for (let i = 0; i < 40; i++) {

        const s = document.createElement("div");

        s.innerHTML = "✨";

        s.style.position = "fixed";

        s.style.left = Math.random() * 100 + "vw";

        s.style.top = Math.random() * 100 + "vh";

        s.style.fontSize = (12 + Math.random() * 18) + "px";

        s.style.pointerEvents = "none";

        s.style.animation = "sparkAnim 2s linear forwards";

        document.body.appendChild(s);

        setTimeout(function () {

            s.remove();

        }, 2000);

    }

}

// ==========================
// SPARKLE ANIMATION
// ==========================

const sparkleStyle = document.createElement("style");

sparkleStyle.innerHTML = `

@keyframes sparkAnim{

0%{

opacity:1;

transform:scale(.3) rotate(0deg);

}

100%{

opacity:0;

transform:translateY(-120px) scale(2) rotate(360deg);

}

}

`;

document.head.appendChild(sparkleStyle);
/* ==========================================
   SCRIPT.JS - PART 3
   LOVE COUNTER • SLIDESHOW • GALLERY
========================================== */

// ==========================
// LOVE COUNTER
// ==========================

// Change this to the day your relationship started
const loveDate = new Date("2019-08-19T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateLoveCounter,1000);

updateLoveCounter();

// ==========================
// LETTER TO LOVE COUNTER
// ==========================

const nextLetter = document.getElementById("nextLetter");

if(nextLetter){

nextLetter.addEventListener("click",function(){

letterSection.style.display="none";

document.getElementById("loveCounter").style.display="block";

document.getElementById("slideshowSection").style.display="block";

});

}

// ==========================
// AUTO SLIDESHOW
// ==========================

const slideImage=document.getElementById("slideImage");

const slides=[

"1.jpg",

"2.jpg",

"3.jpg",

"4.jpg",

"5.jpg",

"6.jpg",

"7.jpg",

"8.jpg"

"9.jpg"

"10.jpg"

"11.jpg"

"12.jpg"

"13.jpg"

"14.jpg"

"15.jpg"

"16.jpg"

"17.jpg"

"18.jpg"


];

let slideIndex=0;

if(slideImage){

setInterval(function(){

slideIndex++;

if(slideIndex>=slides.length){

slideIndex=0;

}

slideImage.classList.remove("fade");

void slideImage.offsetWidth;

slideImage.classList.add("fade");

slideImage.src=slides[slideIndex];

},3000);

}

// ==========================
// GALLERY IMAGE VIEWER
// ==========================

const viewer=document.getElementById("viewer");

const viewerImg=document.getElementById("viewerImg");

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function(img){

img.addEventListener("click",function(){

viewer.style.display="flex";

viewerImg.src=this.src;

});

});

if(viewer){

viewer.addEventListener("click",function(){

viewer.style.display="none";

});

}
/* ==========================================
   SCRIPT.JS - PART 4
   FIREWORKS • CONFETTI • FINAL SCREEN
========================================== */

// ==========================
// FIREWORKS
// ==========================

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;

    for (let i = 0; i < 80; i++) {

        particles.push({
            x: x,
            y: y,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 6 + 2,
            radius: Math.random() * 3 + 1,
            life: 100
        });

    }

}

function animateFireworks() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle=`hsla(${Math.random()*360},100%,60%,${p.life/100})`;
        ctx.fill();

        if(p.life<=0){
            particles.splice(index,1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(createFirework,1800);

// ==========================
// CONFETTI
// ==========================

function confettiBurst(){

    for(let i=0;i<120;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";
        conf.style.left=Math.random()*100+"vw";
        conf.style.top="-20px";
        conf.style.width="8px";
        conf.style.height="14px";
        conf.style.background=`hsl(${Math.random()*360},100%,60%)`;
        conf.style.pointerEvents="none";
        conf.style.zIndex="9999";
        conf.style.transform=`rotate(${Math.random()*360}deg)`;
        conf.style.transition="4s linear";

        document.body.appendChild(conf);

        setTimeout(function(){

            conf.style.top="110vh";
            conf.style.transform=`rotate(${Math.random()*720}deg)`;

        },30);

        setTimeout(function(){

            conf.remove();

        },4500);

    }

}

// ==========================
// FINAL CELEBRATION
// ==========================

const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.addEventListener("click",function(){

confettiBurst();

createFirework();

document.getElementById("celebration").style.display="none";

document.getElementById("finalScreen").style.display="flex";

});

}

// ==========================
// FLOATING STARS
// ==========================

function createStar(){

    const star=document.createElement("div");

    star.innerHTML="⭐";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.opacity=Math.random();
    star.style.pointerEvents="none";
    star.style.fontSize=(10+Math.random()*20)+"px";
    star.style.animation="starBlink 2s infinite";

    document.body.appendChild(star);

    setTimeout(function(){

        star.remove();

    },5000);

}

setInterval(createStar,700);

// ==========================
// STAR ANIMATION
// ==========================

const starStyle=document.createElement("style");

starStyle.innerHTML=`

@keyframes starBlink{

0%{
opacity:.2;
transform:scale(.5);
}

50%{
opacity:1;
transform:scale(1.2);
}

100%{
opacity:.2;
transform:scale(.5);
}

}

`;

document.head.appendChild(starStyle);

// ==========================
// AUTO CONFETTI EVERY 20 SEC
// ==========================

setInterval(confettiBurst,20000);

console.log("❤️ Happy Birthday Guddi ❤️");
