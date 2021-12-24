var body = document.querySelectorAll("body");
var sky = document.querySelectorAll(".sky");
var picBox = document.querySelectorAll(".picBox");
var myPic = document.querySelectorAll(".myPic");
var hat = document.querySelectorAll(".hat");
var gun = document.querySelectorAll(".gun");
var shooter = document.querySelectorAll(".shooter");
var play = document.querySelectorAll(".play");
var xmass = document.querySelectorAll(".XMASS");
var musicTrack = new Audio("./assets/music2.mp3");
var playMusic = true;
musicTrack.volume = 0.5;

let starCount = 0;
let startShooting = false;

var killStarSound = new Audio("./assets/sound.mp3");
killStarSound.volume = 0.3;

const createStar = () => {
    let star = document.createElement("div");
    let core = document.createElement("div");
    star.className = "star";
    core.className = "core";

    star.append(core);
    star.style = `top:${-100 + Math.floor(Math.random() * 300 - 1)}%; left:${
        -100 + Math.floor(Math.random() * 300 - 1)
    }%`;
    body[0].firstElementChild.appendChild(star.cloneNode(true));
};

const createSky = () => {
    if (starCount < 700) {
        setTimeout(() => {
            createStar();
            starCount++;
            createSky();
        }, 30);
    }
};

createSky();

const fallingStar = () => {
    if (body[0].firstElementChild.childNodes[0].className !== "star") {
        fallingStar();
    }

    if (
        body[0].firstElementChild.childNodes[0].id == "fallingStarR" ||
        body[0].firstElementChild.childNodes[0].id == "fallingStarL" ||
        body[0].firstElementChild.childNodes[0].id == "fallingStarC"
    ) {
        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].remove();
            createStar();
        }, 4000);
    }
    if (body[0].firstElementChild.childNodes[0].offsetTop % 3 == 0) {
        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].id = "fallingStarL";
            fallingStar();
        }, 5000);
    } else if (body[0].firstElementChild.childNodes[0].offsetTop % 5 == 0) {
        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].id = "fallingStarC";
            fallingStar();
        }, 5000);
    } else {
        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].id = "fallingStarR";
            fallingStar();
        }, 5000);
    }
};

setTimeout(() => {
    fallingStar();
}, 1000);

document.addEventListener("click", function (e) {
    if (e.target.className === "mute") {
        e.target.className = "play";
        playMusic = true;
        musicTrack.play();
    } else if (e.target.className === "play") {
        e.target.className = "mute";
        playMusic = false;
        musicTrack.pause();
    }
    if (e.pageY > body[0].offsetHeight * 0.85) {
        return;
    }

    if (e.target.className == "myPic") {
        myPic[0].style = `animation:fadeOut 2s ease-in-out;`;
        hat[0].style = `animation:fadeOut 2s ease-in-out;`;
        setTimeout(() => {
            picBox[0].remove();
        }, 4000);
    }

    if (e.target.className === "star" && startShooting) {
        if (playMusic) {
            musicTrack.play();
        }

        if (e.target.offsetTop % 3 == 0) {
            e.target.id = "killStarL";
        } else if (e.target.offsetTop % 5 == 0) {
            e.target.id = "killStarC";
        } else {
            e.target.id = "killStarR";
        }

        killStarSound.currentTime = 0;
        if (playMusic) {
            killStarSound.play();
        }

        gun[0].style = `    border-top:5px solid white; top:unset !important; height:15vh;`;
        setTimeout(() => {
            gun[0].style = `    border-top:5px solid red;`;
        }, 500);
        for (let i = 0; i < sky[0].children.length; i++) {
            sky[0].children[
                i
            ].firstElementChild.style = `background-color:yellow`;

            if (i % 2 === 0) {
                sky[0].children[
                    i
                ].firstElementChild.style = `background-color:green`;
            }
            if (i % 3 == 0) {
                sky[0].children[
                    i
                ].firstElementChild.style = `background-color:red`;
            }
            if (i % 5 === 0) {
                sky[0].children[
                    i
                ].firstElementChild.style = `background-color:blue`;
            }
        }
        setTimeout(() => {
            e.target.remove();
            createStar();
        }, 2000);
    }
});

document.addEventListener("mousemove", function (e) {
    if (e.clientX <= body[0].offsetWidth * 0.5) {
        if (e.clientY >= body[0].offsetHeight * 0.75) {
            if (e.clientX >= body[0].offsetWidth * 0.45) {
                gun[0].style = `transform:rotate(${
                    -0.15 * e.clientY - 3.3 * (0.1 * e.clientY)
                }deg);`;
            } else {
                gun[0].style = `transform:rotate(${
                    -0.18 * e.clientY - 3.8 * (0.1 * e.clientY)
                }deg);`;
            }
        } else if (
            e.clientY <= body[0].offsetHeight * 0.75 &&
            e.clientY >= body[0].offsetHeight * 0.25 &&
            e.clientX >= body[0].offsetWidth * 0.4
        ) {
            gun[0].style = `transform:rotate(${0.05 * e.clientX - 60}deg);`;
        } else {
            gun[0].style = `transform:rotate(${-0.08 * e.clientY}deg);`;
        }
    } else {
        if (e.clientY >= body[0].offsetHeight * 0.75) {
            if (e.clientX <= body[0].offsetWidth * 0.55) {
                gun[0].style = `transform:rotate(${
                    0.15 * e.clientY + 3.3 * (0.1 * e.clientY)
                }deg);`;
            } else {
                gun[0].style = `transform:rotate(${
                    0.18 * e.clientY + 3.8 * (0.1 * e.clientY)
                }deg);`;
            }
        } else if (
            e.clientY <= body[0].offsetHeight * 0.75 &&
            e.clientY >= body[0].offsetHeight * 0.25 &&
            e.clientX <= body[0].offsetWidth * 0.6
        ) {
            gun[0].style = `transform:rotate(${0.05 * e.clientX - 60}deg);`;
        } else {
            gun[0].style = `transform:rotate(${0.08 * e.clientY}deg);`;
        }
    }
});

document.addEventListener("mouseover", function (e) {
    if (e.target.className === "star") {
        sky[0].style = `  animation-play-state: paused;`;
    } else {
        sky[0].style = `  animation-play-state: running;;`;
    }
});

let playAnimations = () => {
    setTimeout(() => {
        xmass[0].children[0].style = `   animation:fadeOut 5s ease-in-out;`;
        xmass[0].children[1].style = `   animation:fadeOut 4s ease-in-out;`;
        setTimeout(() => {
            xmass[0].children[2].remove();
            xmass[0].children[0].remove();
        }, 3000);
    }, 10000);

    setTimeout(() => {
        xmass[0].children[2].style = `   animation:fadeOut 3s ease-in-out;`;
    }, 11000);

    setTimeout(() => {
        xmass[0].children[0].innerHTML = `" For every falling star, a Bright New One is born "`;
        xmass[0].children[0].style = `font-size:2vmax; color:white; animation:  fadeInXmas 5s ease-in-out;         text-shadow: -1px 1px 5px rgba(255, 255, 255, 0.7),
        1px -1px 5px rgba(255, 255, 255, 0.7),
        -1px -1px 5px rgba(255, 255, 255, 0.7),
        -1px -1px 5px rgba(255, 255, 255, 0.7);`;
    }, 14000);

    setTimeout(() => {
        xmass[0].style = `animation:fadeOut 3s ease-in-out`;
        setTimeout(() => {
            xmass[0].remove();
        }, 3000);
        setTimeout(() => {
            myPic[0].style = `animation: fadeInXmas 3s ease-in-out; width:20vmax; height:20vmax;`;
            hat[0].style = `animation: fadeInXmas 2s ease-in-out; width: 20vmax; height: 17vmax;`;

            setTimeout(() => {
                myPic[0].style = `animation: fadeOut 0.5s ease-in-out; width:20vmax; height:20vmax;`;
                hat[0].style = `animation: fadeOut 0.5s ease-in-out; width: 20vmax; height: 17vmax;`;
            }, 3000);
            setTimeout(() => {
                myPic[0].remove();
                hat[0].remove();
                setTimeout(() => {
                    picBox[0].children[0].innerHTML = "Target The Stars !";
                    picBox[0].children[0].style = `animation: fadeInXmas 3s ease-in-out;`;
                    shooter[0].style = `animation: fadeInXmas 3s ease-in-out; visibility:visible;`;
                    setTimeout(() => {
                        play[0].style = `visibility:visible; animation: fadeInXmas 3s ease-in-out;`;
                        startShooting = true;
                    }, 1000);
                }, 1000);

                setTimeout(() => {
                    picBox[0].style = `animation: fadeOut 3s ease-in-out;`;
                    setTimeout(() => {
                        picBox[0].remove();
                    }, 3000);
                }, 5000);
            }, 3500);
        }, 4000);
    }, 24000);
};

playAnimations();
