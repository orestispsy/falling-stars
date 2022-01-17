var body = document.querySelectorAll("body");
var ring = document.querySelectorAll(".ring");
var sky = document.querySelectorAll(".sky");
var linkDescription = document.querySelectorAll(".linkDescription");
var links = document.querySelectorAll("a");
var dots = document.querySelectorAll("#dot");
var destroyer = document.querySelectorAll(".destroyer");
var cannon = document.querySelectorAll(".cannon");
var rockets = document.querySelectorAll(".rocket");
var wingsTop = document.querySelectorAll(".wingsTop");
var saucer = document.querySelectorAll(".saucer");
var saucerClone = false;

var introStar;
let starCount = 0;
let projectsCounter = 0;
let dotCounter = 0;
let ringIsLeft = true;

let saucerElem;
let saucerCloneElem;
var allowSaucerKill = true;
var saucerCounter = 1;
var saucerCloneCounter = 1;

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

const createIntroStar = () => {
    let star = document.createElement("div");
    star.className = "introStar";
    body[0].firstElementChild.appendChild(star);
    introStar = document.querySelectorAll(".introStar");
};

const createSky = () => {
    if (starCount < 250) {
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
    createIntroStar();
}, 1000);

setTimeout(() => {
    introStar[0].remove();
}, 7000);

document.addEventListener("mousedown", function (e) {
    wingsTop[0].style = "justify-content:center;";
    cannon[0].style = `    box-shadow:0 0 50px white; position:fixed;transform: translateY(-${
        body[0].offsetHeight - e.clientY - cannon[0].offsetHeight - 10
    }px)   `;
    rockets.forEach((rocket) => {
        if (rocket.id === "r2") {
            rocket.style = `box-shadow:0 0 50px white; position:fixed;transform: translateY(-${
                body[0].offsetHeight - e.clientY - rockets[0].offsetHeight - 15
            }px) translateX(-1vmax) ; transition:0.2s `;
        } else {
            rocket.style = `box-shadow:0 0 50px white; position:fixed;transform: translateY(-${
                body[0].offsetHeight - e.clientY - rockets[0].offsetHeight - 15
            }px) translateX( 1vmax); transition:0.2s `;
        }
    });

    setTimeout(() => {
        cannon[0].remove();
        let elem = document.createElement("div");
        elem.className = "cannon";
        destroyer[0].prepend(elem);
        cannon = document.querySelectorAll(".cannon");
    }, 50);

    setTimeout(() => {
        rockets.forEach((rocket) => {
            rocket.remove();
        });
        let rocket = document.createElement("div");
        rocket.className = "rocket";
        rocket.id = "r1";
        wingsTop[0].appendChild(rocket.cloneNode(true));
        wingsTop[0].appendChild(rocket.cloneNode(true));
        rockets = document.querySelectorAll(".rocket");
        rockets[rockets.length - 1].id = "r2";
        wingsTop[0].style = "justify-content:space-between";
    }, 150);
});

const changeSaucerAnimation = () => {
    if (saucerCounter % 4 == 0) {
        saucer[0].id = "saucerX";
    } else if (saucerCounter % 2 == 0) {
        saucer[0].id = "saucerHigh";
    } else if (saucerCounter % 3 == 0) {
        saucer[0].id = "saucerMidRight";
    } else {
        saucer[0].id = "saucerLow";
    }
};

const saucerAnimationInspector = () => {
    saucer[0].addEventListener("animationend", () => {
        saucerCounter++;
        changeSaucerAnimation()
        
    });

    if (saucerClone) {
        saucerClone[0].addEventListener("animationend", () => {
            allowSaucerKill = false;
            saucerClone.forEach((saucer) => {
                saucer.style = `  transform: translateY(-100vh); transition:3s`;
            });
              saucer = document.querySelectorAll(`.saucer`);
              saucer[0].addEventListener("animationend", () => {
                  saucerCounter++;
                     changeSaucerAnimation();
              });
            setTimeout(() => {
                for (let i = 0; i < saucerClone.length; i++) {
                    saucerClone[i].remove();
                }
                allowSaucerKill = true;
                saucerClone = false;
              
              
            }, 2000);
        });
    }
};

saucerAnimationInspector();



const createSaucer = (prop1, prop2) => {
    saucerCounter++;
    prop1 = document.createElement("div");
    prop1.appendChild(prop1.cloneNode(true));
    prop1.firstElementChild.appendChild(prop1.cloneNode(true));
    prop1.className = prop2;
    if (saucerCounter % 4 == 0) {
        prop1.id = "saucerX";
    } else if (saucerCounter % 2 == 0) {
        prop1.id = "saucerHigh";
    } else if (saucerCounter % 3 == 0) {
        prop1.id = "saucerMidRight";
    } else {
        prop1.id = "saucerLow";
    }
    body[0].appendChild(prop1);
         saucer = document.querySelectorAll(`.saucer`);
         saucerClone = document.querySelectorAll(`.saucerClone`);
};

document.addEventListener("mousedown", function (e) {
    if (
        (e.target.className === "saucer" && allowSaucerKill) ||
        (e.target.className === "saucerClone" && allowSaucerKill)
    ) {
        allowSaucerKill = false;
        setTimeout(() => {
            e.target.style =
                "transform:translateY(100vh) translateX(-5vw) rotate(-360deg); transition:1s";
            setTimeout(() => {
                if (e.target.className === "saucer") {
                    e.target.remove();
                }
                allowSaucerKill = true;
            }, 2000);
        }, 200);
        if (e.target.className === "saucer") {
            createSaucer(saucerCloneElem, "saucerClone");
            saucerCloneCounter++;
            createSaucer(saucerElem, "saucer");
       
            saucerAnimationInspector();
        }

        if (e.target.className === "saucerClone") {
            setTimeout(() => {
                e.target.remove();
                createSaucer(saucerCloneElem, "saucerClone");
                saucer = document.querySelectorAll(`.saucer`);
                saucerClone = document.querySelectorAll(`.saucerClone`);
                saucerAnimationInspector();
            }, 1000);
        }
    }
    if (e.target.className === "star") {
        if (e.target.offsetTop % 3 == 0) {
            e.target.id = "killStarL";
        } else if (e.target.offsetTop % 5 == 0) {
            e.target.id = "killStarC";
        } else {
            e.target.id = "killStarR";
        }
        setTimeout(() => {
            e.target.remove();
            createStar();
        }, 2000);
    }
});

setTimeout(() => {
    ring[0].style = "visibility:visible; animation: fadeIn 4s; ";
}, 1500);

document.addEventListener("click", function (e) {
    if (e.target.id.includes("link")) {
        linkDescription[0].style = `visibility:visible;  animation: fadeIn 4s;`;
        if (ringIsLeft) {
            ringIsLeft = false;
            ring[0].style =
                "visibility:visible; transform: rotate(0.55turn); transition:3.5s";
        } else {
            ringIsLeft = true;
            ring[0].style =
                "visibility:visible; transform: rotate(0.45turn); transition:3.5s";
        }

        if (e.target.id === "link1") {
            linkDescription[0].innerHTML =
                "Learn More About Me And My Work<a href='https://zero-psy.com/portfolio' target='_blank'>Visit Page</a>";
        } else if (e.target.id === "link2") {
            linkDescription[0].innerHTML =
                "A Concert Agenda & Fan Based Social Network with Admin Tools for the Greek Band 1000mods <a href='https://1000gigs.zero-psy.com' target='_blank'>Visit Page</a>";
        } else if (e.target.id === "link3") {
            linkDescription[0].innerHTML = `Connect4 - The Game <a href='https://zero-psy.com/c4' target='_blank'>Visit Page</a>`;
        }
    } else {
        linkDescription[0].style = `visibility:hidden; animation:none;`;
    }
});

const runFeaturingProjAnimation = () => {
    if (projectsCounter < links.length) {
        setTimeout(() => {
            links[projectsCounter].style =
                "visibility: visible; animation: fadeIn 2s ease-in-out";
            projectsCounter++;
            runFeaturingProjAnimation();
        }, 300);
    }
};

setTimeout(() => {
    runFeaturingProjAnimation();
}, 2000);

const runDotAnime = () => {
    if (dotCounter < dots.length) {
        setTimeout(() => {
            dots[dotCounter].style = "visibility: visible;";
            dotCounter++;
            runDotAnime();
        }, 500);
    } else {
        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: visible;";
        }, 400);

        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: hidden;";
        }, 800);
        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: visible;";
        }, 1200);
        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: visible;";
        }, 1600);

        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: hidden;";
        }, 2000);
        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: visible;";
        }, 2400);

        setTimeout(() => {
            dots[dotCounter - 1].style = "visibility: visible;";
        }, 2800);

        setTimeout(() => {
            dotCounter = dots.length - 1;

            runDotAnimeRewind();
        }, 3000);
    }
};

const runDotAnimeRewind = () => {
    if (dotCounter >= 0) {
        setTimeout(() => {
            dots[dotCounter].style = "visibility: hidden;";
            dotCounter--;
            runDotAnimeRewind();
        }, 500);
    } else {
        setTimeout(() => {
            dotCounter = 0;
            runDotAnime();
        }, 1000);
    }
};

runDotAnime();

document.addEventListener("mousemove", function (e) {
    destroyer[0].style = `left:${e.clientX - 0.5 * destroyer[0].offsetWidth}px`;
});
