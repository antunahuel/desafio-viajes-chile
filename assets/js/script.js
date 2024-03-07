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
});

  // var seccion=$("#presentacion a[0]");
  // console.log(seccion);

  
  // $("#secciones a").click(function(){
  //   $(this);
  //   alert("hola");
  // });