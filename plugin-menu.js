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

        var methods = {

            reset: function(event) {

            },

            destroy: function(options) {

                return this.each(function() {
                    $(window).unbind('.menuLighting');
                })
            },

            init: function(options) {

                return this.each(function() {

                    var menu_selector = "." + $(this).attr('class').split(' ')[0];

                    // Plugin default settings
                    var settings = $.extend({
                        color_default: "",
                        color_active: "",
                        time: 500,
                        background_color: "red",
                        opacity: "0.9",
                        width: "80%",
                        margin_left: "auto",
                        margin_right: "auto",
                        onLight: true,
                        onDudu: false,
                        onScroll: true,
                        trula: true,
                        border_radius: 0
                    }, options);

                    //Function of highlighting menu items when scrolling a page  
                    function onScroll() {

                        //   $(document).on("scroll", function onScroll() {

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
                    };

                    /* Scroll function to the corresponding block with a slice
                     on the menu item when scrolling the page */
                    function trula() {
                        //   $(menu_selector + " a[href*='#']").click(function(e) {
                        $("a[href*='#']", this).click(function(e) {
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
                            }, settings.time, function() {
                                window.location.hash = hash;
                                $(document).on("scroll", onScroll);
                            });
                        });
                    };


                    var $menu = $(this);

                    //  window.onscroll =
                    function onLight() {
                        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                        if (scrolled > 0) {
                            $menu.css({
                                "background-color": settings.background_color,
                                "opacity": settings.opacity,
                                "width": settings.width,
                                "border-radius": settings.border_radius,
                                "margin-right": settings.margin_right,
                                "margin-left": settings.margin_left
                            });

                        } else {
                            $menu.css({ "background-color": "" });
                        }
                    };

                    function onDudu() {
                        alert('dudu');
                    };

                    function setHandlers(options, listHandlers) {
                        listHandlers.forEach(function(item) {
                            if (options[item.name]) {
                                $(document).bind('scroll.menuLighting', item);
                            } else {
                                $(document).unbind('scroll.menuLighting', item);
                            }

                        });
                    };
                    setHandlers(settings, [onLight, onDudu, onScroll, trula]);
                });
            },


            show: function(options) {

            }

        };

        $.fn.menuLighting = function(method) {

            // логика вызова метода
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Метод с именем ' + method + ' не существует для jQuery.menuLighting');
            }
        };

    })(jQuery);

    $('#test').menuLighting({
        color_active: "orange",
        color_default: "",
        time: 500
    });

    // $('#test').menuLighting('destroy');

});