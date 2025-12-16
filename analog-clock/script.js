
// Create stars, sun, and moon once
function createSkyElements() {
    // Stars
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${2 + Math.random() * 2}s infinite alternate`;
        document.body.appendChild(star);
    }

    // Moon
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.position = "absolute";
    moon.style.top = "15%";
    moon.style.left = "80%";
    moon.style.width = "60px";
    moon.style.height = "60px";
    moon.style.borderRadius = "50%";
    moon.style.background = "radial-gradient(circle, #f0f0f0 0%, #cccccc 80%)";
    moon.style.boxShadow = "0 0 20px 5px #f0f0f0";
    moon.style.transition = "opacity 2s";
    document.body.appendChild(moon);

    // Sun
    let sun = document.createElement("div");
    sun.classList.add("sun");
    sun.style.position = "absolute";
    sun.style.top = "10%";
    sun.style.left = "80%";
    sun.style.width = "80px";
    sun.style.height = "80px";
    sun.style.borderRadius = "50%";
    sun.style.background = "radial-gradient(circle, #FFD93B 0%, #FFA500 80%)";
    sun.style.boxShadow = "0 0 40px 15px #FFD93B";
    sun.style.transition = "opacity 2s";
    document.body.appendChild(sun);

    // Set initial day/night state immediately
    updateSky(); 
}

// Function to update clock and sky
function updateSky() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hrotation = (30 * h) + (m / 2);
    let mrotation = 6 * m;
    let srotation = 6 * s;

    document.querySelector("#hour").style.transform = `rotate(${hrotation}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${mrotation}deg)`;
    document.querySelector("#second").style.transform = `rotate(${srotation}deg)`;

    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");

    if (h >= 21 || h <= 5) {
        // Night
        document.body.style.background = "linear-gradient(to bottom, #0b1d51, #000033)";
        moon.style.opacity = "1";
        sun.style.opacity = "0";
    } else {
        // Day
        document.body.style.background = "linear-gradient(to bottom, #87CEEB, #f0f0f0)";
        moon.style.opacity = "0";
        sun.style.opacity = "1";
    }
}

// Run once at start
createSkyElements();

// Update every second
setInterval(updateSky, 1000);



let obj=new Date();

let dd=document.querySelector(".daydate");
let day=obj.getDay();
let date=obj.getDate();
let month=obj.getMonth();
let year=obj.getFullYear();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
dd.innerHTML=`<b>${days[day]} : ${date} ${months[month]} ${year}</b>`