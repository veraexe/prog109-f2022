var myImages =["images/module01.png", "images/module02.png","images/module03.png","images/module04.png","images/module05.png"];


var captionImages =["Module Assignment 01","Module Assignment 02","Module Assignment 03","Module Assignment 04","Module Assignment 05"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
    
    setInterval(autoSlide,2000); // Next

 