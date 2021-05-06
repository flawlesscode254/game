const a = document.getElementById("four");
const day = new Date();
const year = day.getFullYear();

function Change(){
    a.innerHTML = "Copyright " + year + ". All rights reserved. Under-Ground Studios"
}
Change();

setTimeout(() => {
    const b = document.getElementById("butt");
    b.style.opacity = 1;
    b.style.pointerEvents = "all";
}
, 4000);