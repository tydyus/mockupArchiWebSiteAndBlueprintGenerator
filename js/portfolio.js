"use strict";
const portfolios = document.getElementsByClassName("portfolioCard");
for (let i = 0; i < portfolios.length; i++) {
    portfolios[i].addEventListener("click", () => { selectToolPF(i); });
}
const selectToolPF = (i) => {
    const portfolios = document.getElementsByClassName("portfolioCard");
    if (portfolios[i].classList.contains("select"))
        portfolios[i].classList.remove("select");
    else {
        for (let ii = 0; ii < portfolios.length; ii++) {
            portfolios[ii].classList.remove("select");
            i == ii && portfolios[i].classList.add("select");
        }
    }
};
//# sourceMappingURL=portfolio.js.map