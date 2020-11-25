/// Menu Toggle Script
$("#menu-toggle").click( function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuHidden");
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
