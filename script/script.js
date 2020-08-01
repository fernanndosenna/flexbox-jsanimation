var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




var h1= window.document.getElementById("h1")
var h2 = window.document.getElementById("h2")

setTimeout(()=>{
  
    h1.style.opacity="0"
 
},1000)
setTimeout(()=>{
    h1.style.opacity="0.2"

    

},1500)
setTimeout(()=>{
    h1.style.opacity="0.5"


},2000)
setTimeout(()=>{
    h1.style.opacity="0.8"

 
},2500) 
setTimeout(()=>{
    h1.style.opacity="1"

  

},3000)
//h2     

setTimeout(()=>{
  

  h2.style.opacity="0"


},3200)
setTimeout(()=>{

  h2.style.opacity="0.2"


},3700)
setTimeout(()=>{

  h2.style.opacity="0.5"

},4200)
setTimeout(()=>{

  h2.style.opacity="0.8"


},4700) 
setTimeout(()=>{
 
  h2.style.opacity="1"

},5200)
