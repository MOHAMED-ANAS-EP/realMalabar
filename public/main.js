// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("nav-sticky");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
  
// }

// $( function() {
//   $( "#slider-range" ).slider({
//     range: true,
//     min: 0.00,
//     max: 12354955 ,
//     values: [ 0.00, 12354955 ],
//     slide: function( event, ui ) {
//       $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//     }
//   });
//   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
// } );