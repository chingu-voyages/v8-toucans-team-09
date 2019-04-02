// Preloader
$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
    $('#intro').css('display', 'none');
  }, 7000);
});
