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

    if (body[0].firstElementChild.childNodes[0].id == "star") {
        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].remove();
            createStar();
        }, 4000);
    }

        setTimeout(() => {
            body[0].firstElementChild.childNodes[0].id = "star";
            fallingStar();
        }, 5000);

};

setTimeout(() => {
    fallingStar();
}, 1000);
