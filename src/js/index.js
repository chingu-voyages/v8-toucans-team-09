/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('dropdown');
  if (x.className === 'dropdown-menu') {
    x.className += ' responsive';
  } else {
    x.className = 'dropdown-menu';
  }
}

// Preloader
$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
    $('#intro').css('display', 'none');
  }, 6500);
});
