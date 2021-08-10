const portfolios = document.getElementsByClassName("portfolioCard") as HTMLCollectionOf<HTMLElement>;

for (let i = 0; i < portfolios.length; i++) {
    portfolios[i].addEventListener("click", () =>{selectToolPF(i)}) 
}

const selectToolPF = (i:number) => {
    const portfolios = document.getElementsByClassName("portfolioCard") as HTMLCollectionOf<HTMLElement>;
    if (portfolios[i].classList.contains("select"))
            portfolios[i].classList.remove("select"); else {
                for (let ii = 0; ii < portfolios.length; ii++) {
                    portfolios[ii].classList.remove("select");
                    i == ii && portfolios[i].classList.add("select"); 
                }
            }
}