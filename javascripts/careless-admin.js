$(function() {

    // Messages: Close button
    (function() {
        $(".message > span a").click(function() {
            $(this).parents(".message:eq(0)").hide();
            return false;
        });
    })();

    // Aside: Floating it
    (function() {
        var $aside = $('.aside');

        // verify if is possible
        var resizable = 
        // is there scroll?    
        $(document).width() > $('.sub-wrapper').width() &&
        // is there aside?
        $aside.length;

        if (resizable) {    

            // distance from the top of the page
            var top = 10;
            var topAside = $aside.position().top;
            $aside.css({
                'top' : top
            });

            $(document).scroll(function() {
                // aside is going to be hidden, let's keep it fixed
                if ($(this).scrollTop() + top > topAside) {
                    $aside.css({
                        'position' : 'fixed'
                    });
                }
                // just static
                else {
                    $aside.css({
                        'position' : 'static'
                    });
                }
            });
        }
    })();

});
