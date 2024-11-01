function createSlideShow(slideClass, dotClass) {
  let slideIndex = 0;

  function showSlides() {
    let slides = document.getElementsByClassName(slideClass);
    let dots = document.getElementsByClassName(dotClass);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}    

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 4000); // Skift billede hver 4. sekund
  }

  showSlides(); // Start slideshow
}

// Opret tre uafhængige slideshows
createSlideShow("mySlides1", "dot1");
createSlideShow("mySlides2", "dot2");
createSlideShow("mySlides3", "dot3");