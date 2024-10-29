function openScript(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tab_item;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tab_item = document.getElementsByClassName("tab_item");
    for (i = 0; i < tab_item.length; i++) {
      tab_item[i].className = tab_item[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }