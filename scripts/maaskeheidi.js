/* Move in  filter */
function openFilter() {
    document.getElementById("overlay").style.display = "block";
    const side_sheet = document.getElementById("side_sheet");
    side_sheet.classList.remove("side_sheet__move");
}
  
/* Set the width of the side navigation to 0 */
function closeFilter() {
    document.getElementById("overlay").style.display = "none";
    const side_sheet = document.getElementById("side_sheet");
    side_sheet.classList.add("side_sheet__move");
}