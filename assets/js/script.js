// TOOLTIP BOOSTRAP

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// JQUERY SMOOTH SCROLL

$(function(){ 

  $("#secciones a").on("click", function(event){

    if (this.hash !=="") {
      event.preventDefault();
      var hash = this.hash;
      
      $("html,body").animate ({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash=hash;
      });
    }//fin if
  });
  
  $(".boton").click(function(){
    alert("Gracias por contactarnos");
  })

  $("#destacados .title-card").click(function(){
    $(this).toggleClass("destacado");
    $(this).next(".card-text").toggle("slow");
});

});



 