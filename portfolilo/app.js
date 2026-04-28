 function toggleMenu(){
     document.getElementById("menu").classList.toggle("show");
}


let words = ["Frontend Developer", "Web Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];

    if(isDeleting){
        document.getElementById("text").textContent =
        currentWord.substring(0, j--);
    } else {
        document.getElementById("text").textContent =
        currentWord.substring(0, j++);
    }

    if(!isDeleting && j === currentWord.length + 1){
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if(isDeleting && j === 0){
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();




