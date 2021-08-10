export class ConstructionParameter{
    item:string;
    bloc:NodeListOf<HTMLElement>;
    static listItem = ["door","wall","placeholder","seat","floor"];
    static listItemFR = ["porte","mur","bloc","siège","sol"];
    constructor(){
        this.item = "door";
        this.bloc = document.querySelectorAll(
            " #generatorBp div.separateur, " 
            +"#generatorBp div.case ");
    }
    initEvent = () => {
        this.bloc = document.querySelectorAll(
            " #generatorBp div.separateur, " 
            +"#generatorBp div.case ");
        for (let i = 0; i < this.bloc.length; i++) {
            this.bloc[i].addEventListener("click", () => {this.placeItem(this.bloc[i].id)})
            
        }
        let content ="";
        let i = 0
         ConstructionParameter.listItem.forEach(a => {
            content += `<button class="${a=="door"?`select`:""}" id="gBpADD${a}">${ConstructionParameter.listItemFR[i]}</button>`;
            i++;
        });
         (document.getElementById("generatorBPleftbar") as HTMLElement).innerHTML = content;
         ConstructionParameter.listItem.forEach(a => {
            (document.getElementById(`gBpADD${a}`) as HTMLElement).addEventListener("click",
                ()=>{this.changeItem(a)});
         });
    }
    
    placeItem = (target:string) => {
        const targetElement = document.getElementById(target) as HTMLElement;
        ConstructionParameter.listItem.forEach(a => {
            a != this.item && targetElement.classList.remove(a);
        })
        if (targetElement.classList.contains(this.item))
        {targetElement.classList.add(this.item+"R");
        targetElement.classList.remove(this.item);}
        else if (targetElement.classList.contains(this.item+"R"))
        {targetElement.classList.remove(this.item+"R")}
        else 
        {targetElement.classList.add(this.item)} 
    }
    changeItem = (newItem:string) => {
        this.item = newItem;
        const btns = document.querySelectorAll("#generatorBPleftbar button") as NodeListOf<HTMLElement>;
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("select");
            btns[i].id.split("ADD")[1] == newItem && btns[i].classList.add("select");  
        }
    }
}

