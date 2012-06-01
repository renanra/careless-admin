$(function() {

    // Close button for messages
    $(".message > span a").click(function() {
        $(this).parents(".message:eq(0)").hide();
        return false;
    });

    var resizable = $(document).width() > $('.sub-wrapper').width() && $('html').attr('class').match(/linux|mac|windows/);

    if (resizable) {    
        var $aside = $('.aside');
        if ($aside.length) {
            var top = 10;
            var topAside = $aside.position().top;

            $aside.css({
                'top' : top
            });

            $(document).scroll(function() {
                if ($(this).scrollTop() + top > topAside) {
                    $aside.css({
                        'position' : 'fixed'
                    });
                }
                else {
                    $aside.css({
                        'position' : 'static'
                    });
                }
            });
        }
    }

});
