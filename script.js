/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mySortFunction() {
    document.getElementById("mySortDropdown").classList.toggle("show");
  }


  function myFilterFunction() {
    document.getElementById("myFilterDropdown").classList.toggle("shows");
  }




  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
  }

  

