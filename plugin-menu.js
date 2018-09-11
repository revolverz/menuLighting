/*!
  jQuery menuLighting plugin
  @name jquery.menuLighting.js
  @author Evgeny Ishmuratov (ev.ishmuratov@gmail.com)
  @version 1.0
  @date 10/09/2018
  @category jQuery Plugin
  @copyright (c) 2018 [Evgeny Ishmuratov]
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/

$(document).ready(function() {

    (function($) {

        $.fn.menuLighting = function(options) {

            // Assigning a variable to a selector name

            var menu_selector = "." + $(this).attr('class').split(' ')[0];

            // Plugin default settings

            var settings = $.extend({
                color_default: "",
                color_active: "",
                time: 500
            }, options);

            //Function of highlighting menu items when scrolling a page


            function onScroll() {
                var scroll_top = $(document).scrollTop();

                $(menu_selector + " a").each(function() {

                    var hash = $(this).attr("href");
                    var target = $(hash);
                    if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                        $(menu_selector + " a").css({
                            color: settings.color_default
                        });
                        $(this).css({
                            color: settings.color_active
                        });
                    } else {
                        $(this).css({
                            color: settings.color_default
                        });
                    }
                });
            }

            /* Scroll function to the corresponding block with a slice
             on the menu item when scrolling the page */

            $(document).on("scroll", onScroll);
            $(menu_selector + " a[href*='#']").click(function(e) {
                e.preventDefault();
                $(document).off("scroll");
                $(menu_selector + " a").css({
                    color: settings.color_default
                });
                $(this).css({
                    color: settings.color_active
                });
                var hash = $(this).attr("href");
                var target = $(hash);
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, settings.scroll_time, function() {
                    window.location.hash = hash;
                    $(document).on("scroll", onScroll);
                });
            });

        };
    })(jQuery);
});