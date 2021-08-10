export class ConstructionParameter {
    constructor() {
        this.initEvent = () => {
            this.bloc = document.querySelectorAll(" #generatorBp div.separateur, "
                + "#generatorBp div.case ");
            for (let i = 0; i < this.bloc.length; i++) {
                this.bloc[i].addEventListener("click", () => { this.placeItem(this.bloc[i].id); });
            }
            let content = "";
            ConstructionParameter.listItem.forEach(a => {
                content += `<button class="${a == "door" ? `select` : ""}" id="gBpADD${a}">${a}</button>`;
            });
            document.getElementById("generatorBPleftbar").innerHTML = content;
            ConstructionParameter.listItem.forEach(a => {
                document.getElementById(`gBpADD${a}`).addEventListener("click", () => { this.changeItem(a); });
            });
        };
        this.placeItem = (target) => {
            const targetElement = document.getElementById(target);
            ConstructionParameter.listItem.forEach(a => {
                a != this.item && targetElement.classList.remove(a);
            });
            if (targetElement.classList.contains(this.item)) {
                targetElement.classList.add(this.item + "R");
                targetElement.classList.remove(this.item);
            }
            else if (targetElement.classList.contains(this.item + "R")) {
                targetElement.classList.remove(this.item + "R");
            }
            else {
                targetElement.classList.add(this.item);
            }
        };
        this.changeItem = (newItem) => {
            this.item = newItem;
            const btns = document.querySelectorAll("#generatorBPleftbar button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("select");
                btns[i].id.split("ADD")[1] == newItem && btns[i].classList.add("select");
            }
        };
        this.item = "door";
        this.bloc = document.querySelectorAll(" #generatorBp div.separateur, "
            + "#generatorBp div.case ");
    }
}
ConstructionParameter.listItem = ["door", "wall", "placeholder", "seat"];
//# sourceMappingURL=constructMod.js.map