import { ConstructionParameter } from "./blueprintGen/constructMod";
//operation
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
}
//class
class Seed {
    constructor() {
        this.target = 0;
        this.seed = (Math.random() * Math.pow(10, 17)).toString();
    }
    newSeed() {
        this.target = 0;
        this.seed = (Math.random() * Math.pow(10, 17)).toString();
    }
    getRandom(pourcentage = 50) {
        let result = false;
        //regarde si l'on peut piocher sur une profondeur de deux
        this.seed.length == this.target + 2 && this.newSeed();
        //compare pourcentage
        +(this.seed[this.target] + this.seed[this.target + 1]) <= (pourcentage) && (result = true);
        //met a jour sur une profondeur de deux
        this.seed.length == this.target + 2 ? this.newSeed() : this.target++;
        return result;
    }
}
class Patron {
    constructor(x = 10, y = 10) {
        this.makeTextFile = function (text) {
            var data = new Blob([text], { type: 'text/plain' });
            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (Patron.textFile !== null) {
                window.URL.revokeObjectURL(Patron.textFile);
            }
            Patron.textFile = window.URL.createObjectURL(data);
            // returns a URL you can use as a href
            return Patron.textFile;
        };
        this.buttonGeneration = () => {
            this.generation(7, 7, 3, 3, 90, 40);
        };
        this.generation = (RoomMaxSizeX = 7, RoomMaxSizeY = 7, RoomMinSizeX = 3, RoomMinSizeY = 3, conqInit = 85, conqSec = 50) => {
            this.matrice = [];
            this.rooms = [];
            this.render = "";
            this.x = this.xSave;
            this.y = this.ySave;
            const seed = new Seed();
            const xSlot = getRandomInt(RoomMinSizeX, RoomMaxSizeX);
            const ySlot = getRandomInt(RoomMinSizeY, RoomMaxSizeY);
            const genBasicShape = () => {
                ////Base Matrice
                for (let y = 0; y < ySlot; y++) {
                    this.matrice[y] || this.matrice.push([]);
                    for (let x = 0; x < xSlot; x++) {
                        this.matrice[y].push({ id: (xSlot * y) + x + 1, contain: [], x: x, y: y });
                    }
                }
                ////Conquete
                for (let y = 0; y < ySlot; y++) {
                    for (let x = 0; x < xSlot; x++) {
                        //regarde si l'on s'etend depuis la racine ou une feuille et ajuste la puissance de la conquete
                        let conquete = (xSlot * y) + x + 1 == this.matrice[y][x].id ?
                            conqInit : conqSec; //en %
                        //Conquete
                        x + 1 < xSlot && seed.getRandom(conquete)
                            && (this.matrice[y][x + 1].id = this.matrice[y][x].id);
                        y + 1 < ySlot && seed.getRandom(conquete)
                            && (this.matrice[y + 1][x].id = this.matrice[y][x].id);
                    }
                }
                ////Expension
                //ajuster la taille x/y du tableau celon la generation
                this.x -= this.x % xSlot;
                this.y -= this.y % ySlot;
                //save la matrice avant modif
                const oldMatrice = this.matrice;
                //reset matrice
                this.matrice = [];
                //lance l'expension
                for (let y = 0; y < this.y; y++) {
                    this.matrice[y] || this.matrice.push([]);
                    for (let x = 0; x < this.x; x++) {
                        this.matrice[y].push({ id: oldMatrice[Math.floor(y / (this.y / ySlot))][Math.floor(x / (this.x / xSlot))]
                                .id, contain: [], x: x, y: y });
                    }
                }
            };
            genBasicShape();
            // boucle -> 
            const validationShape = (nbrMinRoom = 3, nbrMaxRecursion = 5, _iteration = 0) => {
                _iteration++;
                // reset rooms (au cas ou ce serais la Xem iteration)
                this.rooms = [];
                if (_iteration < nbrMaxRecursion) {
                    for (let y = 0; y < this.matrice.length; y++) { //index les rooms avec leur taille
                        for (let x = 0; x < this.matrice[0].length; x++) {
                            let oldRoomIndex = -1;
                            for (let r = 0; r < this.rooms.length; r++)
                                this.rooms[r].id == +this.matrice[y][x].id && (oldRoomIndex = r);
                            oldRoomIndex > -1 ?
                                this.rooms[oldRoomIndex].size++
                                : this.rooms.push({ size: 1, name: "none", tag: [], id: +this.matrice[y][x].id });
                        }
                    }
                    // valide les rooms
                    this.rooms.length < nbrMinRoom && validationShape(nbrMinRoom, nbrMaxRecursion, _iteration);
                    if (this.rooms.length < nbrMinRoom)
                        return false;
                    else
                        return true;
                }
                console.error("Don't find a good shape on " + _iteration + " generation, relaunch the generation or reduce the minimum of room!");
                return false;
            };
            validationShape(2, 1000) && this.drawOnHtml();
            // attribution piéce/porte/arc
            // pose objet
            // draw
            //set export button
            this.exportRender();
            //set import button
            this.importRender(this);
            //set event de construction
            this.parameterEvent.initEvent();
        };
        this.drawOnHtml = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let draw = "";
            const sizeCase = (40 / this.matrice.length);
            //create div
            for (let y = 0; y < this.matrice.length * 2 + 1; y++) { //index les rooms avec leur taille
                draw += `<div class=col style="width:${y % 2 == 0 ? sizeCase / 4 : sizeCase}vw">`;
                for (let x = 0; x < this.matrice[0].length * 2 + 1; x++) {
                    const xx = Math.floor(x / 2);
                    const yy = Math.floor(y / 2);
                    if (y % 2 < 1) { //collone full separateur
                        if (x % 2 < 1) { //separateur petit
                            draw += `<div 
                        id="Sx${x}y${y}" class="separateur separateurAngle"
                        style="width:${sizeCase / 4}vw; height:${sizeCase / 4}vw">
                        </div>`;
                        }
                        else { //separateur verticale
                            draw += `<div 
                        id="Sx${x}y${y}" class="separateur separateurVerticale"
                        style="width:${sizeCase / 4}vw; height:${sizeCase}vw">
                        </div>`;
                        }
                    }
                    else {
                        if (x % 2 < 1) { //separateur horizontal
                            draw += `<div 
                        id="Sx${x}y${y}" class="separateur separateurHorizontal"
                        style="width:${sizeCase}vw; height:${sizeCase / 4}vw">
                        </div>`;
                        }
                        else { //case
                            draw +=
                                `<div 
                        id="Cx${x}y${y}" class="id${this.matrice[yy][xx].id} case
                        "
                        style="width:${sizeCase}vw; height:${sizeCase}vw">
                        </div>`;
                        }
                    }
                }
                draw += "</div>";
            }
            Patron.html.innerHTML = draw;
            //add wall
            const separateurs = document.getElementsByClassName("separateur");
            for (let i = 0; i < separateurs.length; i++) {
                //recupére la position du séparateur
                let x = separateurs[i].id.split("x")[1];
                let y = x.split("y")[1];
                x = x.split("y")[0];
                //bordure
                if (+x == 0 || +y == 0 || +x == this.matrice[0].length * 2 || +y == this.matrice.length * 2) {
                    separateurs[i].classList.add("wall");
                }
                //inside the house
                else {
                    if (((_a = document.getElementById(`Cx${+x - 1}y${+y}`)) === null || _a === void 0 ? void 0 : _a.classList[0]) != ((_b = document.getElementById(`Cx${+x + 1}y${+y}`)) === null || _b === void 0 ? void 0 : _b.classList[0])
                        || ((_c = document.getElementById(`Cx${+x}y${+y - 1}`)) === null || _c === void 0 ? void 0 : _c.classList[0]) != ((_d = document.getElementById(`Cx${+x}y${+y + 1}`)) === null || _d === void 0 ? void 0 : _d.classList[0])
                        || ((_e = document.getElementById(`Cx${+x - 1}y${+y - 1}`)) === null || _e === void 0 ? void 0 : _e.classList[0]) != ((_f = document.getElementById(`Cx${+x + 1}y${+y + 1}`)) === null || _f === void 0 ? void 0 : _f.classList[0])
                        || ((_g = document.getElementById(`Cx${+x + 1}y${+y - 1}`)) === null || _g === void 0 ? void 0 : _g.classList[0]) != ((_h = document.getElementById(`Cx${+x - 1}y${+y + 1}`)) === null || _h === void 0 ? void 0 : _h.classList[0])) {
                        separateurs[i].classList.add("wall");
                    }
                }
            }
        };
        this.parameterEvent = new ConstructionParameter;
        this.xSave = this.x = x;
        this.ySave = this.y = y;
        this.matrice = [];
        this.rooms = [];
        this.render = "";
        document.getElementById("newGeneration")
            .addEventListener("click", () => { this.buttonGeneration(); });
    }
    stringRender() {
        let render = [];
        for (let yy = 0; yy < this.matrice.length; yy++) {
            let num = yy < 10 ? ` 0${yy}` : `${yy}`;
            let row = `${num}: `;
            for (let xx = 0; xx < this.matrice[yy].length; xx++) {
                row += `${+this.matrice[yy][xx].id + 10}.`;
            }
            render.push(row);
        }
        return render;
    }
    exportRender() {
        let render = document.getElementById("generatorBp");
        document.getElementById("exportGeneration")
            .addEventListener("click", () => {
            let link = document.createElement("a");
            link.setAttribute('download', 'blueprint.aBP');
            link.href = this.makeTextFile(render.innerHTML);
            document.body.appendChild(link);
            window.requestAnimationFrame(function () {
                var event = new MouseEvent('click');
                link.dispatchEvent(event);
                document.body.removeChild(link);
            });
        }, false);
    }
    importRender(self) {
        const loader = document.getElementById("inputImportGeneration");
        loader.addEventListener('change', () => {
            let file = loader.files[0];
            console.log(file);
            let reader = new FileReader();
            reader.addEventListener('load', function (e) {
                let text = e.target.result;
                Patron.html.innerHTML = text;
                //reset les event de construction
                self.parameterEvent.initEvent();
            });
            reader.readAsText(file);
        });
    }
}
Patron.html = document.getElementById("generatorBp");
//export function
Patron.textFile = null;
let blueprint = new Patron(20, 20);
blueprint.generation(7, 7, 3, 3, 90, 40);
//console.log(blueprint.stringRender());
//# sourceMappingURL=blueprintGenerator.js.map