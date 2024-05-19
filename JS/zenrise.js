const filterButtons = document.querySelectorAll(".filterbuttons button");
const filterableCards = document.querySelectorAll(".filtercards .card2");

const filterCards = e => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

filterableCards.forEach(card2 => {
card2.classList.add("hide");

if(card2.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
    card2.classList.remove("hide");
}
});
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));

//slideshow for about pg
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

//contact page: javascript form

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!validateForm(form)) return;

    alert("Message sent!");
});

const validateForm =(form) => {
    let valid = true;
    let name = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email");

    if(name.value === "") {
        giveError(name, "Please enter your name");
        valid = false;
    }
    if(message.value === "") {
        giveError(message, "Please enter your message");
        valid = false;
    }

    //email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = email.value;
    if(!emailRegex.test(emailValue)) {
        giveError(email, "Please enter a valid email");
        valid = false;
    }
    //if valid email, return true
    if (valid) {
        return true;
    }
};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    let existingError = parentElement.querySelector(".err-msg");
    if (existingError) {
        existingError.remove();
    }
    let error = document.createElement("span")
    error.textContent = message;
    error.classList.add("err-msg")
    parentElement.appendChild(error);
};

//removing error 
const inputs = document.querySelectorAll("input")
const textareas = document.querySelectorAll("textarea");

let allFields = [ ... inputs, ... textareas]
allFields.forEach((field) =>{
    field.addEventListener("input", () => {
        removeError(field);
    });
});

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error");
    let error = parentElement.querySelector(".err-msg");
    if (error) {
        error.remove();
    }
};
