"use strict";
const carrousels = document.getElementsByClassName("carrousel");
let AllVignettes = [];
// init carrousel
const initCarrousel = () => {
    for (let iCarrousel = 0; iCarrousel < carrousels.length; iCarrousel++) {
        const vignettes = carrousels[iCarrousel].getElementsByClassName("vignette");
        AllVignettes.push(vignettes);
        for (let index = 0; index < vignettes.length; index++) {
            index == 0 && vignettes[index].classList.add("vignetteOnFocus");
            index == 0 && (vignettes[index].style.left = 0 + "%");
            index == 0 || (vignettes[index].style.left = 100 + "%");
        }
    }
};
initCarrousel();
//move every 5sec
let reverse = false;
const moveCarrousel = (direction = 0) => {
    direction == 1 && (reverse = false);
    direction == -1 && (reverse = true);
    for (let iV = 0; iV < AllVignettes.length; iV++) {
        let focus = -1;
        let oldfocus = false;
        for (let i = 0; i < AllVignettes[iV].length; i++) {
            // maf focus
            if (reverse) {
                if (AllVignettes[iV][AllVignettes[iV].length - 1].classList.contains("vignetteOnFocus") && focus == -1) {
                    focus = 0;
                    AllVignettes[iV][AllVignettes[iV].length - 1].classList.remove("vignetteOnFocus");
                    AllVignettes[iV][i].classList.add("vignetteOnFocus");
                }
                else if (AllVignettes[iV][i + 1].classList.contains("vignetteOnFocus") && focus == -1) {
                    focus = 0;
                    AllVignettes[iV][i + 1].classList.remove("vignetteOnFocus");
                    AllVignettes[iV][i].classList.add("vignetteOnFocus");
                }
                else if (focus == 0) {
                    focus = 1;
                }
            }
            else {
                if (AllVignettes[iV][i].classList.contains("vignetteOnFocus") && focus == -1) {
                    oldfocus = true;
                    AllVignettes[iV][i].classList.remove("vignetteOnFocus");
                }
                else if (focus == 0) {
                    focus = 1;
                }
                else if (oldfocus && focus == -1) {
                    focus = 0;
                    AllVignettes[iV][i].classList.add("vignetteOnFocus");
                }
            }
            //maj position
            switch (focus) {
                case (-1):
                    AllVignettes[iV][i].style.left = -100 + "%";
                    break;
                case (0):
                    AllVignettes[iV][i].style.left = 0 + "%";
                    break;
                case (1):
                    AllVignettes[iV][i].style.left = 100 + "%";
                    break;
            }
            // alternate switch carrousel
            i + 1 == AllVignettes[iV].length
                && AllVignettes[iV][i].classList.contains("vignetteOnFocus")
                && !reverse
                && (reverse = true);
            i + 1 == 1
                && AllVignettes[iV][i].classList.contains("vignetteOnFocus")
                && reverse
                && (reverse = false);
        }
    }
};
const CarrouselInterval = setInterval(moveCarrousel, 5000);
//# sourceMappingURL=carrousel.js.map