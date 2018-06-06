$(document).ready(function() {
  // Add jQuery here

  // EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
  // HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
  // AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

  // THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
  // ADDS THE CLASS OF 'show'
  // REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

  $(".b-dots").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.dots").addClass("show");
    $(".item.dots").removeClass("hide");
  });

  $(".b-lines").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.lines").addClass("show");
    $(".item.lines").removeClass("hide");
  });

  $(".b-colourcubes").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.colourcubes").addClass("show");
    $(".item.colourcubes").removeClass("hide");
  });

  $(".b-mandala").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.mandala").addClass("show");
    $(".item.mandala").removeClass("hide");
  });

  $(".b-texture").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.texture").addClass("show");
    $(".item.texture").removeClass("hide");
  });

  $(".b-space").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.space").addClass("show");
    $(".item.space").removeClass("hide");
  });


  // dont remvoe this line
});
