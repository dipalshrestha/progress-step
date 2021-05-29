
const mainbar = document.querySelector(".mainbar");
const circle = document.querySelectorAll(".numberCircle");
const prev= document.querySelector("#prev");
const next = document.querySelector("#next");

let currentActive = 1;

prev.addEventListener("click", backward);
next.addEventListener("click", forward);

function forward(){
    currentActive++;
    circle[currentActive-1].classList.add("active");

    if(currentActive === 2){
        prev.disabled = false;
        mainbar.style.width = "30%";
    }else if(currentActive == 3){
        mainbar.style.width = "60%";
    }else{
        next.disabled = true;
        mainbar.style.width = "100%";
    }

}

function backward(){
    currentActive--;
    circle[currentActive].classList.remove("active");

    if(currentActive === 1){
        prev.disabled = true;
        mainbar.style.width = "0";
    }else if(currentActive === 2){
        mainbar.style.width = "30%";
    } else{
        next.disabled = false;
        mainbar.style.width = "60%";
    }
}