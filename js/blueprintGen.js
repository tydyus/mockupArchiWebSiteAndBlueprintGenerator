/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/blueprintGen/constructMod.ts":
/*!*****************************************!*\
  !*** ./ts/blueprintGen/constructMod.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructionParameter": () => (/* binding */ ConstructionParameter)
/* harmony export */ });
class ConstructionParameter {
    constructor() {
        this.initEvent = () => {
            this.bloc = document.querySelectorAll(" #generatorBp div.separateur, "
                + "#generatorBp div.case ");
            for (let i = 0; i < this.bloc.length; i++) {
                this.bloc[i].addEventListener("click", () => { this.placeItem(this.bloc[i].id); });
            }
            let content = "";
            let i = 0;
            ConstructionParameter.listItem.forEach(a => {
                content += `<button class="${a == "door" ? `select` : ""}" id="gBpADD${a}">${ConstructionParameter.listItemFR[i]}</button>`;
                i++;
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
ConstructionParameter.listItem = ["door", "wall", "placeholder", "seat", "floor"];
ConstructionParameter.listItemFR = ["porte", "mur", "bloc", "siège", "sol"];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./ts/blueprintGenerator.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blueprintGen_constructMod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blueprintGen/constructMod */ "./ts/blueprintGen/constructMod.ts");

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
        this.parameterEvent = new _blueprintGen_constructMod__WEBPACK_IMPORTED_MODULE_0__.ConstructionParameter;
        this.xSave = this.x = x;
        this.ySave = this.y = y;
        this.matrice = [];
        this.rooms = [];
        this.render = "";
        const btn = document.getElementById("newGeneration");
        document.getElementById("validateNewGeneration")
            .addEventListener("click", () => {
            this.buttonGeneration();
            btn.classList.remove("security");
        });
        btn.addEventListener("click", () => {
            btn.classList.contains("security") ?
                btn.classList.remove("security") :
                btn.classList.add("security");
        });
        //set export button
        this.exportRender();
        //set import button
        this.importRender(this);
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
blueprint.parameterEvent.initEvent();
//blueprint.generation(7,7,3,3,90,40);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9ibHVlcHJpbnRHZW4vY29uc3RydWN0TW9kLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3RzL2JsdWVwcmludEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0scUJBQXFCO0lBSzlCO1FBTUEsY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUNqQyxnQ0FBZ0M7a0JBQy9CLHdCQUF3QixDQUFDLENBQUM7WUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQzthQUVsRjtZQUNELElBQUksT0FBTyxHQUFFLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1IscUJBQXFCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUUsTUFBTSxFQUFDLFNBQVEsRUFBQyxHQUFFLGVBQWUsQ0FBQyxLQUFLLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN0SCxDQUFDLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBaUIsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ25GLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQzNFLEdBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztRQUVELGNBQVMsR0FBRyxDQUFDLE1BQWEsRUFBRSxFQUFFO1lBQzFCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFnQixDQUFDO1lBQ3JFLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQztZQUNGLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMvQztnQkFBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBQztpQkFDdEMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUN4RDtnQkFBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQzthQUFDO2lCQUUvQztnQkFBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQUM7UUFDNUMsQ0FBQztRQUNELGVBQVUsR0FBRyxDQUFDLE9BQWMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBNEIsQ0FBQztZQUNoRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1RTtRQUNMLENBQUM7UUE5Q0csSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQ2pDLGdDQUFnQztjQUMvQix3QkFBd0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O0FBUE0sOEJBQVEsR0FBRyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQztBQUN4RCxnQ0FBVSxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O1VDSjdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmlFO0FBQ2pFLFdBQVc7QUFFWCxTQUFTLFlBQVksQ0FBQyxHQUFVLEVBQUUsR0FBVTtJQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN2RCxDQUFDO0FBa0JILE9BQU87QUFDUCxNQUFNLElBQUk7SUFHTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsT0FBTztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsU0FBUyxDQUFDLGNBQW1CLEVBQUU7UUFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUU7UUFDcEQscUJBQXFCO1FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xFLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUNELE1BQU0sTUFBTTtJQVVSLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEdBQUcsRUFBRTtRQXNDakIsaUJBQVksR0FBRyxVQUFVLElBQVc7WUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1lBRWxELDZEQUE2RDtZQUM3RCx3REFBd0Q7WUFDeEQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRCxzQ0FBc0M7WUFDdEMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQWdDRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxlQUFVLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFDLFlBQVksR0FBRyxDQUFDLEVBQUMsWUFBWSxHQUFHLENBQUMsRUFBQyxZQUFZLEdBQUcsQ0FBQyxFQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQzdHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3hCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEQsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsQ0FBQztZQUN0RCxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUMvRDtpQkFDSjtnQkFDRCxZQUFZO2dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzVCLCtGQUErRjt3QkFDL0YsSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQzs0QkFDdEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNO3dCQUMxQixVQUFVO3dCQUNWLENBQUMsR0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDOytCQUNoQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxDQUFDLEdBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzsrQkFDaEMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDNUQ7aUJBQ0o7Z0JBQ0QsYUFBYTtnQkFDYixzREFBc0Q7Z0JBQ3RELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLDZCQUE2QjtnQkFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDaEMsZUFBZTtnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsbUJBQW1CO2dCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBQyxVQUFVLENBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lDQUM3QixFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUNoQztpQkFDSjtZQUFDLENBQUM7WUFDSCxhQUFhLEVBQUU7WUFDZixhQUFhO1lBQ2IsTUFBTSxlQUFlLEdBQUcsQ0FBQyxVQUFVLEdBQUUsQ0FBQyxFQUFFLGVBQWUsR0FBRyxDQUFDLEVBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUMxRSxVQUFVLEVBQUU7Z0JBQ1oscURBQXFEO2dCQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxVQUFVLEdBQUcsZUFBZSxFQUFDO29CQUM3QixLQUFLLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxrQ0FBa0M7d0JBQzdFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDN0MsSUFBSSxZQUFZLEdBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0NBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3JFLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBQztnQ0FDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRztnQ0FDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO3lCQUN4RjtxQkFBQztvQkFDRixtQkFBbUI7b0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxJQUFJLGVBQWUsQ0FBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN6RixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVU7d0JBQUUsT0FBTyxLQUFLLENBQUM7O3dCQUFNLE9BQU8sSUFBSSxDQUFDO2lCQUN0RTtnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixHQUFDLFVBQVUsR0FBQyxxRUFBcUUsQ0FBQyxDQUFDO2dCQUM5SCxPQUFPLEtBQUs7WUFDaEIsQ0FBQztZQUNELGVBQWUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2IsT0FBTztZQUVQLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxlQUFVLEdBQUcsR0FBRyxFQUFFOztZQUNkLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLFlBQVk7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLGtDQUFrQztnQkFDakYsSUFBSSxJQUFJLCtCQUErQixDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLE1BQU0sQ0FBQztnQkFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFHLHlCQUF5Qjt3QkFDcEMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLGtCQUFrQjs0QkFDNUIsSUFBSSxJQUFHO2dDQUNDLENBQUMsSUFBSSxDQUFDO3VDQUNDLFFBQVEsR0FBQyxDQUFDLGNBQWMsUUFBUSxHQUFDLENBQUM7K0JBQzFDO3lCQUNWOzZCQUFNLEVBQUUsc0JBQXNCOzRCQUMzQixJQUFJLElBQUc7Z0NBQ0MsQ0FBQyxJQUFJLENBQUM7dUNBQ0MsUUFBUSxHQUFDLENBQUMsY0FBYyxRQUFROytCQUN4Qzt5QkFDVjtxQkFDSjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsdUJBQXVCOzRCQUNqQyxJQUFJLElBQUc7Z0NBQ0MsQ0FBQyxJQUFJLENBQUM7dUNBQ0MsUUFBUSxjQUFjLFFBQVEsR0FBQyxDQUFDOytCQUN4Qzt5QkFDVjs2QkFBTSxFQUFFLE1BQU07NEJBQ1gsSUFBSTtnQ0FDSjtnQ0FDUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTs7dUNBRXBDLFFBQVEsY0FBYyxRQUFROytCQUN0Qzt5QkFDZDtxQkFBQztpQkFDVDtnQkFBQyxJQUFJLElBQUksUUFBUSxDQUFDO2FBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzdCLFVBQVU7WUFDVixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO29CQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztpQkFBQztnQkFDL0gsa0JBQWtCO3FCQUNiO29CQUNELElBQUksZUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxjQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQzsyQkFDcEgsZUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxjQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQzsyQkFDcEgsZUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUksY0FBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOzJCQUN4SCxlQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxjQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQzt3QkFDekgsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3hDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBNU5HLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw2RUFBcUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7UUFDZixNQUFNLEdBQUcsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBaUIsQ0FBQztRQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFpQjthQUM1RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNQLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFDO2dCQUNuQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBQztnQkFDakMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUNOLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLE1BQU0sR0FBaUIsRUFBRTtRQUM3QixLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLEVBQUUsRUFBQyxNQUFLLEVBQUUsRUFBRSxFQUFDLElBQUcsRUFBRSxFQUFFLENBQUM7WUFDbkMsSUFBSSxHQUFHLEdBQVUsR0FBRyxHQUFHLElBQUksQ0FBQztZQUM1QixLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ2pELEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFHLENBQUM7YUFDNUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQWlCRCxZQUFZO1FBQ1IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQWdCLENBQUM7UUFDbEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBaUI7YUFDdkQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUU7WUFFakMsTUFBTSxDQUFDLHFCQUFxQixDQUFDO2dCQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ2IsQ0FBQztJQUNELFlBQVksQ0FBQyxJQUFXO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQXFCO1FBQ25GLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ25DLElBQUksSUFBSSxHQUFJLE1BQU0sQ0FBQyxLQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFTLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQyxNQUFxQixDQUFDLE1BQU0sQ0FBQztnQkFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBYyxDQUFDO2dCQUM5QixpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQzs7QUEzRk0sV0FBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFnQixDQUFDO0FBNkNwRSxpQkFBaUI7QUFDRixlQUFRLEdBQWtCLElBQUksQ0FBQztBQTJMbEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckMsc0NBQXNDIiwiZmlsZSI6ImJsdWVwcmludEdlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25zdHJ1Y3Rpb25QYXJhbWV0ZXJ7XHJcbiAgICBpdGVtOnN0cmluZztcclxuICAgIGJsb2M6Tm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBzdGF0aWMgbGlzdEl0ZW0gPSBbXCJkb29yXCIsXCJ3YWxsXCIsXCJwbGFjZWhvbGRlclwiLFwic2VhdFwiLFwiZmxvb3JcIl07XHJcbiAgICBzdGF0aWMgbGlzdEl0ZW1GUiA9IFtcInBvcnRlXCIsXCJtdXJcIixcImJsb2NcIixcInNpw6hnZVwiLFwic29sXCJdO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLml0ZW0gPSBcImRvb3JcIjtcclxuICAgICAgICB0aGlzLmJsb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBcIiAjZ2VuZXJhdG9yQnAgZGl2LnNlcGFyYXRldXIsIFwiIFxyXG4gICAgICAgICAgICArXCIjZ2VuZXJhdG9yQnAgZGl2LmNhc2UgXCIpO1xyXG4gICAgfVxyXG4gICAgaW5pdEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYmxvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIFwiICNnZW5lcmF0b3JCcCBkaXYuc2VwYXJhdGV1ciwgXCIgXHJcbiAgICAgICAgICAgICtcIiNnZW5lcmF0b3JCcCBkaXYuY2FzZSBcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJsb2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9jW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7dGhpcy5wbGFjZUl0ZW0odGhpcy5ibG9jW2ldLmlkKX0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29udGVudCA9XCJcIjtcclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgQ29uc3RydWN0aW9uUGFyYW1ldGVyLmxpc3RJdGVtLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxidXR0b24gY2xhc3M9XCIke2E9PVwiZG9vclwiP2BzZWxlY3RgOlwiXCJ9XCIgaWQ9XCJnQnBBREQke2F9XCI+JHtDb25zdHJ1Y3Rpb25QYXJhbWV0ZXIubGlzdEl0ZW1GUltpXX08L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRvckJQbGVmdGJhclwiKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgQ29uc3RydWN0aW9uUGFyYW1ldGVyLmxpc3RJdGVtLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ0JwQUREJHthfWApIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgICgpPT57dGhpcy5jaGFuZ2VJdGVtKGEpfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGFjZUl0ZW0gPSAodGFyZ2V0OnN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIENvbnN0cnVjdGlvblBhcmFtZXRlci5saXN0SXRlbS5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICBhICE9IHRoaXMuaXRlbSAmJiB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pdGVtKSlcclxuICAgICAgICB7dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuaXRlbStcIlJcIik7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaXRlbSk7fVxyXG4gICAgICAgIGVsc2UgaWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuaXRlbStcIlJcIikpXHJcbiAgICAgICAge3RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLml0ZW0rXCJSXCIpfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAge3RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLml0ZW0pfSBcclxuICAgIH1cclxuICAgIGNoYW5nZUl0ZW0gPSAobmV3SXRlbTpzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLml0ZW0gPSBuZXdJdGVtO1xyXG4gICAgICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dlbmVyYXRvckJQbGVmdGJhciBidXR0b25cIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ0bnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgYnRuc1tpXS5pZC5zcGxpdChcIkFERFwiKVsxXSA9PSBuZXdJdGVtICYmIGJ0bnNbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdFwiKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0NvbnN0cnVjdGlvblBhcmFtZXRlcn0gZnJvbSBcIi4vYmx1ZXByaW50R2VuL2NvbnN0cnVjdE1vZFwiXHJcbi8vb3BlcmF0aW9uXHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOm51bWJlciwgbWF4Om51bWJlcikgeyAvL3JhbmRvbSBpbnQgZW50cmUgbWluIGV0IG1heFxyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCsxKTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuXHJcbi8vaW50ZXJmYWNlXHJcblxyXG5pbnRlcmZhY2UgQ2FzZXtcclxuICAgIGNvbnRhaW46IEFycmF5PHN0cmluZz4sXHJcbiAgICBpZDogXCIjXCIgfCBudW1iZXI7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbn1cclxuaW50ZXJmYWNlIFJvb217XHJcbiAgICBpZDpudW1iZXIsXHJcbiAgICBuYW1lOiBcIm5vbmVcIiB8IFwid2NcIiB8IFwiY2hhbWJyZVwiIHwgXCJzYWxvblwiIHwgXCJjdWlzaW5lXCIgfCBcInNhbGxlIGRlIGJhaW5cIiB8IFwidGVycmFzZVwiLFxyXG4gICAgc2l6ZTpudW1iZXIsXHJcbiAgICB0YWc6IEFycmF5PHN0cmluZz5cclxufVxyXG5cclxuLy9jbGFzc1xyXG5jbGFzcyBTZWVke1xyXG4gICAgc2VlZDpzdHJpbmc7XHJcbiAgICB0YXJnZXQ6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gKE1hdGgucmFuZG9tKCkqTWF0aC5wb3coMTAsMTcpKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgbmV3U2VlZCgpe1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gMDtcclxuICAgICAgICB0aGlzLnNlZWQgPSAoTWF0aC5yYW5kb20oKSpNYXRoLnBvdygxMCwxNykpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb20ocG91cmNlbnRhZ2U6bnVtYmVyPTUwKXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy9yZWdhcmRlIHNpIGwnb24gcGV1dCBwaW9jaGVyIHN1ciB1bmUgcHJvZm9uZGV1ciBkZSBkZXV4XHJcbiAgICAgICAgdGhpcy5zZWVkLmxlbmd0aCA9PSB0aGlzLnRhcmdldCsyJiYgdGhpcy5uZXdTZWVkKCkgO1xyXG4gICAgICAgIC8vY29tcGFyZSBwb3VyY2VudGFnZVxyXG4gICAgICAgICsodGhpcy5zZWVkW3RoaXMudGFyZ2V0XSt0aGlzLnNlZWRbdGhpcy50YXJnZXQrMV0pIDw9IChwb3VyY2VudGFnZSkgJiYgKHJlc3VsdCA9IHRydWUpO1xyXG4gICAgICAgIC8vbWV0IGEgam91ciBzdXIgdW5lIHByb2ZvbmRldXIgZGUgZGV1eFxyXG4gICAgICAgIHRoaXMuc2VlZC5sZW5ndGggPT0gdGhpcy50YXJnZXQrMj8gdGhpcy5uZXdTZWVkKCkgOiB0aGlzLnRhcmdldCsrO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUGF0cm9ue1xyXG4gICAgc3RhdGljIGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRvckJwXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgeDpudW1iZXI7XHJcbiAgICB5Om51bWJlcjtcclxuICAgIHhTYXZlOm51bWJlcjtcclxuICAgIHlTYXZlOm51bWJlcjtcclxuICAgIG1hdHJpY2U6QXJyYXk8QXJyYXk8Q2FzZT4+O1xyXG4gICAgcm9vbXM6QXJyYXk8Um9vbT47XHJcbiAgICByZW5kZXI6c3RyaW5nO1xyXG4gICAgcGFyYW1ldGVyRXZlbnQ6IENvbnN0cnVjdGlvblBhcmFtZXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHggPSAxMCx5ID0gMTApe1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVyRXZlbnQgPSBuZXcgQ29uc3RydWN0aW9uUGFyYW1ldGVyO1xyXG4gICAgICAgIHRoaXMueFNhdmUgPSB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueVNhdmUgPSB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubWF0cmljZSA9IFtdO1xyXG4gICAgICAgIHRoaXMucm9vbXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlbmRlcj1cIlwiO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dlbmVyYXRpb25cIikgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXRlTmV3R2VuZXJhdGlvblwiKSBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkdlbmVyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VjdXJpdHlcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWN1cml0eVwiKT9cclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VjdXJpdHlcIik6XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNlY3VyaXR5XCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy9zZXQgZXhwb3J0IGJ1dHRvblxyXG4gICAgICAgIHRoaXMuZXhwb3J0UmVuZGVyKCk7XHJcbiAgICAgICAgLy9zZXQgaW1wb3J0IGJ1dHRvblxyXG4gICAgICAgIHRoaXMuaW1wb3J0UmVuZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1JlbmRlcigpIHtcclxuICAgICAgICBsZXQgcmVuZGVyOkFycmF5PHN0cmluZz4gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IHl5ID0gMDsgeXkgPCB0aGlzLm1hdHJpY2UubGVuZ3RoOyB5eSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSB5eTwgMTA/YCAwJHt5eX1gOmAke3l5fWA7XHJcbiAgICAgICAgICAgIGxldCByb3c6c3RyaW5nID0gYCR7bnVtfTogYDtcclxuICAgICAgICAgICAgZm9yIChsZXQgeHggPSAwOyB4eCA8IHRoaXMubWF0cmljZVt5eV0ubGVuZ3RoOyB4eCsrKSB7XHJcbiAgICAgICAgICAgICAgICByb3cgKz0gYCR7K3RoaXMubWF0cmljZVt5eV1beHhdLmlkKzEwfS5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlci5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbiAgICAvL2V4cG9ydCBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGV4dEZpbGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYWtlVGV4dEZpbGUgPSBmdW5jdGlvbiAodGV4dDpzdHJpbmcpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBCbG9iKFt0ZXh0XSwge3R5cGU6ICd0ZXh0L3BsYWluJ30pO1xyXG5cclxuICAgICAgICAvLyBJZiB3ZSBhcmUgcmVwbGFjaW5nIGEgcHJldmlvdXNseSBnZW5lcmF0ZWQgZmlsZSB3ZSBuZWVkIHRvXHJcbiAgICAgICAgLy8gbWFudWFsbHkgcmV2b2tlIHRoZSBvYmplY3QgVVJMIHRvIGF2b2lkIG1lbW9yeSBsZWFrcy5cclxuICAgICAgICBpZiAoUGF0cm9uLnRleHRGaWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoUGF0cm9uLnRleHRGaWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFBhdHJvbi50ZXh0RmlsZSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm5zIGEgVVJMIHlvdSBjYW4gdXNlIGFzIGEgaHJlZlxyXG4gICAgICAgIHJldHVybiBQYXRyb24udGV4dEZpbGU7XHJcbiAgICB9O1xyXG4gICAgZXhwb3J0UmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRvckJwXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydEdlbmVyYXRpb25cIikgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdibHVlcHJpbnQuYUJQJyk7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHRoaXMubWFrZVRleHRGaWxlKHJlbmRlci5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspIDtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH1cclxuICAgIGltcG9ydFJlbmRlcihzZWxmOlBhdHJvbikge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRJbXBvcnRHZW5lcmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IChsb2FkZXIuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xyXG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XHJcblx0ICAgIFx0XHRsZXQgdGV4dCA9IChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQ7XHJcblx0ICAgIFx0XHRQYXRyb24uaHRtbC5pbm5lckhUTUwgPSB0ZXh0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIC8vcmVzZXQgbGVzIGV2ZW50IGRlIGNvbnN0cnVjdGlvblxyXG4gICAgICAgICAgICAgICAgc2VsZi5wYXJhbWV0ZXJFdmVudC5pbml0RXZlbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYnV0dG9uR2VuZXJhdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbig3LDcsMywzLDkwLDQwKTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRpb24gPSAoUm9vbU1heFNpemVYID0gNyxSb29tTWF4U2l6ZVkgPSA3LFJvb21NaW5TaXplWCA9IDMsUm9vbU1pblNpemVZID0gMyxjb25xSW5pdCA9IDg1LCBjb25xU2VjID0gNTApID0+IHtcclxuICAgICAgICB0aGlzLm1hdHJpY2UgPSBbXTtcclxuICAgICAgICB0aGlzLnJvb21zID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXI9XCJcIjtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnhTYXZlO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueVNhdmU7XHJcbiAgICAgICAgY29uc3Qgc2VlZCA9IG5ldyBTZWVkKCk7XHJcbiAgICAgICAgY29uc3QgeFNsb3QgPSBnZXRSYW5kb21JbnQoUm9vbU1pblNpemVYLFJvb21NYXhTaXplWCk7XHJcbiAgICAgICAgY29uc3QgeVNsb3QgPSBnZXRSYW5kb21JbnQoUm9vbU1pblNpemVZLFJvb21NYXhTaXplWSk7XHJcbiAgICAgICAgY29uc3QgZ2VuQmFzaWNTaGFwZSA9ICgpID0+e1xyXG4gICAgICAgIC8vLy9CYXNlIE1hdHJpY2VcclxuICAgICAgICBmb3IgKGxldCB5PSAwOyB5IDwgeVNsb3Q7IHkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1hdHJpY2VbeV0gfHwgdGhpcy5tYXRyaWNlLnB1c2goW10pXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeFNsb3Q7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaWNlW3ldLnB1c2goe2lkOih4U2xvdCp5KSt4KzEsY29udGFpbjpbXSx4OngseTp5fSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLy8vQ29ucXVldGVcclxuICAgICAgICBmb3IgKGxldCB5PSAwOyB5IDwgeVNsb3Q7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHhTbG90OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIC8vcmVnYXJkZSBzaSBsJ29uIHMnZXRlbmQgZGVwdWlzIGxhIHJhY2luZSBvdSB1bmUgZmV1aWxsZSBldCBhanVzdGUgbGEgcHVpc3NhbmNlIGRlIGxhIGNvbnF1ZXRlXHJcbiAgICAgICAgICAgICAgICBsZXQgY29ucXVldGUgPSAoeFNsb3QqeSkreCsxID09IHRoaXMubWF0cmljZVt5XVt4XS5pZD9cclxuICAgICAgICAgICAgICAgIGNvbnFJbml0IDogY29ucVNlYzsgLy9lbiAlXHJcbiAgICAgICAgICAgICAgICAvL0NvbnF1ZXRlXHJcbiAgICAgICAgICAgICAgICB4KzEgPCB4U2xvdCAmJiBzZWVkLmdldFJhbmRvbShjb25xdWV0ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubWF0cmljZVt5XVt4KzFdLmlkID0gdGhpcy5tYXRyaWNlW3ldW3hdLmlkKTtcclxuICAgICAgICAgICAgICAgIHkrMSA8IHlTbG90ICYmIHNlZWQuZ2V0UmFuZG9tKGNvbnF1ZXRlKSBcclxuICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5tYXRyaWNlW3krMV1beF0uaWQgPSB0aGlzLm1hdHJpY2VbeV1beF0uaWQpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vRXhwZW5zaW9uXHJcbiAgICAgICAgLy9hanVzdGVyIGxhIHRhaWxsZSB4L3kgZHUgdGFibGVhdSBjZWxvbiBsYSBnZW5lcmF0aW9uXHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMueCV4U2xvdDtcclxuICAgICAgICB0aGlzLnkgLT0gdGhpcy55JXlTbG90O1xyXG4gICAgICAgIC8vc2F2ZSBsYSBtYXRyaWNlIGF2YW50IG1vZGlmXHJcbiAgICAgICAgY29uc3Qgb2xkTWF0cmljZSA9IHRoaXMubWF0cmljZTtcclxuICAgICAgICAvL3Jlc2V0IG1hdHJpY2VcclxuICAgICAgICB0aGlzLm1hdHJpY2UgPSBbXTtcclxuICAgICAgICAvL2xhbmNlIGwnZXhwZW5zaW9uXHJcbiAgICAgICAgZm9yIChsZXQgeT0gMDsgeSA8IHRoaXMueTsgeSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cmljZVt5XSB8fCB0aGlzLm1hdHJpY2UucHVzaChbXSlcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLng7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaWNlW3ldLnB1c2goe2lkOm9sZE1hdHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBbTWF0aC5mbG9vcih5Lyh0aGlzLnkveVNsb3QpKV1cclxuICAgICAgICAgICAgICAgICAgICBbTWF0aC5mbG9vcih4Lyh0aGlzLngveFNsb3QpKV1cclxuICAgICAgICAgICAgICAgICAgICAuaWQsY29udGFpbjpbXSx4OngseTp5fSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSB9XHJcbiAgICAgICAgZ2VuQmFzaWNTaGFwZSgpXHJcbiAgICAgICAgLy8gYm91Y2xlIC0+IFxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25TaGFwZSA9IChuYnJNaW5Sb29tPSAzLCBuYnJNYXhSZWN1cnNpb24gPSA1LF9pdGVyYXRpb24gPSAwKSA9PntcclxuICAgICAgICAgICAgX2l0ZXJhdGlvbisrXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHJvb21zIChhdSBjYXMgb3UgY2Ugc2VyYWlzIGxhIFhlbSBpdGVyYXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMucm9vbXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKF9pdGVyYXRpb24gPCBuYnJNYXhSZWN1cnNpb24pe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeT0gMDsgeSA8IHRoaXMubWF0cmljZS5sZW5ndGg7IHkrKykgeyAvL2luZGV4IGxlcyByb29tcyBhdmVjIGxldXIgdGFpbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hdHJpY2VbMF0ubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFJvb21JbmRleD0tMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLnJvb21zLmxlbmd0aDsgcisrKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbXNbcl0uaWQgPT0gK3RoaXMubWF0cmljZVt5XVt4XS5pZCAmJiAob2xkUm9vbUluZGV4ID0gcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJvb21JbmRleCA+IC0xPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbXNbb2xkUm9vbUluZGV4XS5zaXplICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucm9vbXMucHVzaCh7c2l6ZToxLG5hbWU6XCJub25lXCIsdGFnOltdLGlkOit0aGlzLm1hdHJpY2VbeV1beF0uaWR9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLy8gdmFsaWRlIGxlcyByb29tc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb29tcy5sZW5ndGggPCBuYnJNaW5Sb29tICYmIHZhbGlkYXRpb25TaGFwZShuYnJNaW5Sb29tLG5ick1heFJlY3Vyc2lvbixfaXRlcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb21zLmxlbmd0aCA8IG5ick1pblJvb20pIHJldHVybiBmYWxzZTsgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRG9uJ3QgZmluZCBhIGdvb2Qgc2hhcGUgb24gXCIrX2l0ZXJhdGlvbitcIiBnZW5lcmF0aW9uLCByZWxhdW5jaCB0aGUgZ2VuZXJhdGlvbiBvciByZWR1Y2UgdGhlIG1pbmltdW0gb2Ygcm9vbSFcIik7IFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsaWRhdGlvblNoYXBlKDIsMTAwMCkgJiYgdGhpcy5kcmF3T25IdG1sKCk7XHJcbiAgICAgICAgLy8gYXR0cmlidXRpb24gcGnDqWNlL3BvcnRlL2FyY1xyXG4gICAgICAgIC8vIHBvc2Ugb2JqZXRcclxuICAgICAgICAvLyBkcmF3XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zZXQgZXZlbnQgZGUgY29uc3RydWN0aW9uXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJFdmVudC5pbml0RXZlbnQoKTtcclxuICAgIH1cclxuICAgIGRyYXdPbkh0bWwgPSAoKSA9PntcclxuICAgICAgICBsZXQgZHJhdzpzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHNpemVDYXNlID0gKDQwL3RoaXMubWF0cmljZS5sZW5ndGgpO1xyXG4gICAgICAgIC8vY3JlYXRlIGRpdlxyXG4gICAgICAgIGZvciAobGV0IHk9IDA7IHkgPCB0aGlzLm1hdHJpY2UubGVuZ3RoKjIrMTsgeSsrKSB7IC8vaW5kZXggbGVzIHJvb21zIGF2ZWMgbGV1ciB0YWlsbGVcclxuICAgICAgICAgICAgZHJhdyArPSBgPGRpdiBjbGFzcz1jb2wgc3R5bGU9XCJ3aWR0aDoke3klMiA9PSAwP3NpemVDYXNlLzQgOiBzaXplQ2FzZX12d1wiPmA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5tYXRyaWNlWzBdLmxlbmd0aCoyKzE7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeHggPSBNYXRoLmZsb29yKHgvMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5eSA9IE1hdGguZmxvb3IoeS8yKTtcclxuICAgICAgICAgICAgICAgIGlmICh5JTIgPCAxKXsgIC8vY29sbG9uZSBmdWxsIHNlcGFyYXRldXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCUyIDwgMSl7IC8vc2VwYXJhdGV1ciBwZXRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3ICs9YDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiU3gke3h9eSR7eX1cIiBjbGFzcz1cInNlcGFyYXRldXIgc2VwYXJhdGV1ckFuZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3NpemVDYXNlLzR9dnc7IGhlaWdodDoke3NpemVDYXNlLzR9dndcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vc2VwYXJhdGV1ciB2ZXJ0aWNhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhdyArPWA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlN4JHt4fXkke3l9XCIgY2xhc3M9XCJzZXBhcmF0ZXVyIHNlcGFyYXRldXJWZXJ0aWNhbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7c2l6ZUNhc2UvNH12dzsgaGVpZ2h0OiR7c2l6ZUNhc2V9dndcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHglMiA8IDEpeyAvL3NlcGFyYXRldXIgaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3ICs9YDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiU3gke3h9eSR7eX1cIiBjbGFzcz1cInNlcGFyYXRldXIgc2VwYXJhdGV1ckhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiR7c2l6ZUNhc2V9dnc7IGhlaWdodDoke3NpemVDYXNlLzR9dndcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3ICs9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDeCR7eH15JHt5fVwiIGNsYXNzPVwiaWQke3RoaXMubWF0cmljZVt5eV1beHhdLmlkfSBjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6JHtzaXplQ2FzZX12dzsgaGVpZ2h0OiR7c2l6ZUNhc2V9dndcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICB9IGRyYXcgKz0gXCI8L2Rpdj5cIjt9XHJcbiAgICAgICAgUGF0cm9uLmh0bWwuaW5uZXJIVE1MID0gZHJhdztcclxuICAgICAgICAvL2FkZCB3YWxsXHJcbiAgICAgICAgY29uc3Qgc2VwYXJhdGV1cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VwYXJhdGV1clwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcGFyYXRldXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vcmVjdXDDqXJlIGxhIHBvc2l0aW9uIGR1IHPDqXBhcmF0ZXVyXHJcbiAgICAgICAgICAgIGxldCB4ID0gc2VwYXJhdGV1cnNbaV0uaWQuc3BsaXQoXCJ4XCIpWzFdO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHguc3BsaXQoXCJ5XCIpWzFdO1xyXG4gICAgICAgICAgICB4ID0geC5zcGxpdChcInlcIilbMF07XHJcbiAgICAgICAgICAgIC8vYm9yZHVyZVxyXG4gICAgICAgICAgICBpZiAoK3ggPT0gMCB8fCAreSA9PSAwIHx8ICt4ID09IHRoaXMubWF0cmljZVswXS5sZW5ndGgqMiB8fCAreSA9PSB0aGlzLm1hdHJpY2UubGVuZ3RoKjIpIHtzZXBhcmF0ZXVyc1tpXS5jbGFzc0xpc3QuYWRkKFwid2FsbFwiKX1cclxuICAgICAgICAgICAgLy9pbnNpZGUgdGhlIGhvdXNlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBDeCR7K3gtMX15JHsreX1gKT8uY2xhc3NMaXN0WzBdICE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBDeCR7K3grMX15JHsreX1gKT8uY2xhc3NMaXN0WzBdXHJcbiAgICAgICAgICAgICAgICB8fCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYEN4JHsreH15JHsreS0xfWApPy5jbGFzc0xpc3RbMF0gIT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYEN4JHsreH15JHsreSsxfWApPy5jbGFzc0xpc3RbMF1cclxuICAgICAgICAgICAgICAgIHx8ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgQ3gkeyt4LTF9eSR7K3ktMX1gKT8uY2xhc3NMaXN0WzBdICE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBDeCR7K3grMX15JHsreSsxfWApPy5jbGFzc0xpc3RbMF1cclxuICAgICAgICAgICAgICAgIHx8ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgQ3gkeyt4KzF9eSR7K3ktMX1gKT8uY2xhc3NMaXN0WzBdICE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBDeCR7K3gtMX15JHsreSsxfWApPy5jbGFzc0xpc3RbMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRldXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJ3YWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgYmx1ZXByaW50ID0gbmV3IFBhdHJvbigyMCwyMCk7XHJcbmJsdWVwcmludC5wYXJhbWV0ZXJFdmVudC5pbml0RXZlbnQoKTtcclxuLy9ibHVlcHJpbnQuZ2VuZXJhdGlvbig3LDcsMywzLDkwLDQwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==