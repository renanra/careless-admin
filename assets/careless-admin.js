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

    // Tables: Selectable
    (function() {
        $('.selectable th input[type=checkbox]').click(function() {
            var $table = $(this).parents('table:eq(0)'), map;
            var $that = $(this);
            map = function() {
                $(this).prop('checked', $that.is(":checked"));
            }
            $table.find("input[type=checkbox]").each(map)
            $table.find("input[type=checkbox]").each(toggleActive);
        });

        $('.selectable tbody tr').click(function() {
            $checkbox = $(this).find("input[type=checkbox]");
            $checkbox.prop('checked', !$checkbox.prop('checked'));
            $checkbox.triggerHandler('click');
        });
        
        var updateView = function() {
            var $table = $(this).parents('table:eq(0)');
            var countChecked = $table.find("tbody input[type=checkbox]:checked").length;
            $(".selectable-count").text(countChecked);
            
            if (countChecked) {
                $(".selectable-if").show();
            }
            else {
                $(".selectable-if").hide();
            }
        };
        var toggleActive = function() {
            var $tr = $(this).parents("tr:eq(0)");
            if ($(this).is(":checked")) {
                $tr.addClass("active");
            }
            else {
                $tr.removeClass("active");
            }
        };

        $checkboxes = $('.selectable input[type=checkbox]');
        $checkboxes.click(updateView);
        $checkboxes.click(toggleActive);
        
        $checkboxes.click(function(e) {
            e.stopPropagation();
        });

        updateView.call($checkboxes.eq(0));
    })();
});
