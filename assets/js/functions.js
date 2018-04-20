$( document ).ready(function() {

  $('input[name="phoneNumber"]').inputmask("+9 (999) 999 99 99");

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {

        if($('.navbar-collapse').hasClass('show')) {
            $(this).parents('.navbar-collapse').collapse('hide');
        };
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          $('html, body').animate({
            scrollTop: target.offset().top -54
          }, 1000)
            return false;
        }
      }
    });
});

function showFeedbackPopup() {
  $("body").css("overflow-y", "hidden");
  $("#modal-form").parent().fadeIn();
  $("#modal-form").fadeIn();
}
function hideFeedbackPopup() {
  $("body").css("overflow-y", "scroll");
  $("#modal-form").parent().fadeOut();
  $("#modal-form").fadeOut();
  $("#modal-thanks").fadeOut();
}


// Get the modal
var feedback_modal = document.getElementById('feedback-modal');

// When the user clicks on <span> (x), close the modal
$(".close-popup").click(function() {
    hideFeedbackPopup();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == feedback_modal  ) {
      hideFeedbackPopup();
    }
}



var hero
    , sections = $('section')
    , nav = $('nav');

$(window).on('scroll', function () {
  var nav_height = nav.outerHeight();
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height-1,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');

      $(this).parent().addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});
