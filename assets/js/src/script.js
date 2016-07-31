jQuery(document).ready(function($) {
    $(".contact-form-select").click(function(event) {
        event.stopPropagation();
        $(this).find('ul').toggle();
    });
    $(".contact-form-select li").click(function(event) {
        event.stopPropagation();
        $(this).parents(".contact-form-select").find('span').html($(this).text());
        $(this).parent().hide();
    });
    $(window).click(function(event) {
        $(".contact-form-select ul").hide();
    });
});
