
// var img = document.getElementById("demo");

// img.addEventListener("click", function(){ //when the image is clicked, the src attribute changes

//  img.src = "../css/images/spidey.jpg"; //if u write image.class it will give u an error because class is changed to "className"
//     img.setAttribute("src", "../css/images/spidey.jpg"); // better use this approach
  
// })

var imgs = Array.from(document.querySelectorAll(".item img")); //this transfers it into an array so that we can use indexOf
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn =  document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

for(var i=0; i < imgs.length; i++){
  imgs[i].addEventListener("click", function(event){ //if we pass a parameter here, that parameter will hold the event info
    // console.log(event.target); //outputs the image/event that was clicked on. it prints the whole tag 
    var imgSrc = event.target.getAttribute("src"); //gets the img src

    currentIndex = imgs.indexOf(event.target);
    // console.log(currentIndex);

    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"; //changes the background image to the image src that we clicked on
    lightBoxContainer.style.display = "flex";
  })
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);

function nextSlide(){
  currentIndex++;
  if(currentIndex == imgs.length) //so that it wouldnt throw an error
  {
    currentIndex = 0;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}

document.addEventListener("keydown", function(event){
  if(event.code == "ArrowRight"){ //u can check the value of every code in the javascript Event key Codes website
    nextSlide();
  }
  else if(event.code == "ArrowLeft"){
    prevSlide();
  }
  else if(event.code == "Escape"){
    closeSlide();
  }
})

function prevSlide(){
  currentIndex--;
  if(currentIndex == -1) //so that it wouldnt throw an error
  {
    currentIndex = imgs.length-1;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}

function closeSlide(){
  lightBoxContainer.style.display = "none";
}