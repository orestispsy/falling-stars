var body = document.querySelectorAll("body");

let starCount = 0;

const createStar = () => {
    let star = document.createElement("div");
    star.className = "star";
    star.style = `top:${Math.floor(
        Math.random() * 100 - 1
    )}%; left:${Math.floor(Math.random() * 100 - 1)}%`;
    body[0].firstElementChild.appendChild(star.cloneNode(true));
};

const createSky = () => {
    if (starCount < 350) {
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
