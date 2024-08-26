var si = document.querySelector(".si");
var no = document.querySelector(".no");


function swap() {
    let sitext = "yes sweety";
    let notext = "no fag";

    if (no.classList.contains("no")) {
        no.classList.remove("no");
        no.classList.add("si");
        no.textContent = sitext;

        si.classList.remove("si");
        si.classList.add("no");
        si.textContent = notext;
    } 
    else {
        no.classList.remove("si");
        no.classList.add("no");
        no.textContent = notext;

        si.classList.remove("no");
        si.classList.add("si");
        si.textContent = sitext;
    }
}

// Add event listeners to both buttons
si.addEventListener("mouseover", swap);
no.addEventListener("mouseover", swap);