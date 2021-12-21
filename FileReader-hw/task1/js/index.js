let block = document.querySelector(".display-main");
let userInput = document.querySelector(".input-part");
let message = document.querySelector(".message");
let enterBtn = document.querySelector(".enter-button");
let show = document.querySelector(".container");
let images = document.querySelectorAll(".image-wrapper img");
let popup = document.querySelector(".image-wrapper .popup");
let closeIcon = document.querySelector(".image-wrapper .close-icon");
let leftBtn = document.querySelector(".arrows .left");
let rightBtn = document.querySelector(".arrows .right");
let gallery = document.querySelector(".gallery");


//FUNCTIONS
function enterFunction(){
    message.innerHTML = "Welcome this page " + userInput.value;
}
function blockFunction(){
    block.style.display = "none";
}
function hideFunction(){
  show.style.display = "none";
}
console.log(hideFunction());

function showFunction(){
show.style.display = "revert"
}
function openFunction() {
  popup.style.display = "flex";
}

function closeFunction() {
  popup.style.display = "none";
}
function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  item.setAttribute("src", item.getAttribute("src"));
}

function nextElemSib(item) {

  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}

EVENTS
enterBtn.addEventListener("click", function(){
    console.log(enterBtn);
    enterFunction();
    blockFunction();
    showFunction();
})

console.log(images)

images.forEach((image) => {
    image.addEventListener("click", function (e) {
        e.preventDefault();
        openFunction();
        changableImage(this);
        this.classList.add("showSlide");
        console.log(this);
    });
});

rightBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

leftBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

closeIcon.addEventListener("click", function () {
    closeFunction();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    closeFunction();
  }
});

document .addEventListener("keydown", (e) =>{
  if (e.code === "Enter") {
      console.log(e);
    enterFunction();
    blockFunction();
    showFunction();
  }
})
document. addEventListener("keydown", (e) =>{
    if(e.code === "LeftArrow"){
        nextElemSib();
    }
})
document. addEventListener("keydown", (e) =>{
    if(e.code === "RightArrow"){
        prevElemSib();
    }
})
popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closeFunction();
  }
});



let uploadFile = document.querySelector("form i");

uploadFile.addEventListener("click", function () {
  this.nextElementSibling.click();
});

uploadFile.nextElementSibling.addEventListener("change", function (e) {
  const { files } = e.target;

  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend = function (e) {
      const { result } = e.target;

      // console.log(result, file);  
      const img = document.createElement("img");
      img.setAttribute("src", result);
      document.querySelector(".image-wrapper").append(img);
      img.addEventListener("click", () => {
        console.log("clicked")
        openFunction();
        changableImage(img);
        img.classList.add("showSlide");
        console.log(img)
        document.querySelector(".image-wrapper img").append(img);
      })
    }

    fileReader.readAsDataURL(file);
  }
});