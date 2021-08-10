"use strict";
const cursor = document.getElementById("underlineNav");
const links = document.querySelectorAll("nav .link a");
//links[0].getBoundingClientRect().top
//links[0].getBoundingClientRect().left
const move = (id) => {
    cursor.style.left = (links[id].getBoundingClientRect().left - 10) + "px";
    cursor.style.width =
        (links[id].getBoundingClientRect().right -
            links[id].getBoundingClientRect().left) + "px";
};
move(0);
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => move(i));
}
//# sourceMappingURL=CursorOnNav.js.map