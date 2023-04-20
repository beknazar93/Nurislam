$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
          ],
          loop:true,
      });

    $('.burger').on('click', function () {
        $('.burger').toggleClass('burger_activ')
    })
});



  