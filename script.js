var body = document.querySelectorAll("body");
var ring = document.querySelectorAll(".ring");
var sky = document.querySelectorAll(".sky");
var linkDescription = document.querySelectorAll(".linkDescription");

let starCount = 0;

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
}, 1000);

document.addEventListener("click", function (e) {
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
    ring[0].style = "visibility:visible; animation: fadeIn 4s;";
}, 800);

document.addEventListener("mouseover", function (e) {
    if (e.target.id.includes("link")) {
        linkDescription[0].style = `visibility:visible;`;

        ring[0].style =
            "visibility:visible; shakeRing 10s infinite ease-in-out;";
        if (e.target.id === "link1") {
            linkDescription[0].innerHTML = "Learn More About Me And My Work";
        } else if (e.target.id === "link2") {
            linkDescription[0].innerHTML =
                "A Social Network And Concert Agenda with Admin's Tools for the Greek Band 1000mods";
        } else if (e.target.id === "link3") {
            linkDescription[0].innerHTML = `Connect4 - The Game`;
        }
    } else {
        linkDescription[0].style = `visibility:hidden;`;

        ring[0].style = "visibility:visible;  animation-play-state: paused;";
    }
});
