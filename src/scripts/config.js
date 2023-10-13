$(document).ready(function() {
    // mini menu
    $(".toggle").click(function (e) { 
        e.preventDefault();
        $("nav").toggleClass("menu-active");
    });
});
