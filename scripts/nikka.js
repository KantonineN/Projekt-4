function tabPresser(evt, tabName) {
    /* Get all elements with class="tabcontent" and hide them
    Hides content on all the different tabs */
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
     const tab_item = document.getElementsByClassName("tab_item");
    for (let i = 0; i < tab_item.length; i++) {
        tab_item[i].className = tab_item[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function accordion() {
    const accordion = document.getElementsByClassName("accordion__btn");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            const accordion__panel = this.nextElementSibling;
            const icon = this.querySelector(".accordion__icon");
            if (accordion__panel.style.maxHeight) {
                accordion__panel.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            } else {
                accordion__panel.style.maxHeight = accordion__panel.scrollHeight + "px";
                icon.style.transform = "rotate(-180deg)";
            }
        });
    }
}
accordion();