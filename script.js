document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popupContainer");
    const closePopup = document.getElementById("closePopup");
  
    // Show popup
    popupContainer.style.display = "flex";
  
    // Close popup
    closePopup.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });
