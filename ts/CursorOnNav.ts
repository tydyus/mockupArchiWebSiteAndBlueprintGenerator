const cursor = document.getElementById("underlineNav") as HTMLElement;

const links = document.querySelectorAll("nav .link a") as NodeListOf<HTMLElement>;


const move = (id:number) => {
    cursor.style.left =  (links[id].getBoundingClientRect().left - 10) + "px";
    cursor.style.width = 
        (links[id].getBoundingClientRect().right -
        links[id].getBoundingClientRect().left) + "px";

}
move(0);
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => move(i))
}