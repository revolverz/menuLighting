/*!
  jQuery menuLighting plugin
  @name jquery.menuLighting.js
  @author Evgeny Ishmuratov (ev.ishmuratov@gmail.com)
  @version 1.0
  @date 27/10/2018
  @category jQuery Plugin
  @copyright (c) 2018 [Evgeny Ishmuratov]
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/



( function ( $ ) {
    var methods = {
        init : function( options ) {
            var defaultOptions = {
                colorDefault : '',
                colorActive  : '',
                animateTime  : 500,
                bgColor      : 'green',
                opacity      : 0.9,
                width        : '80%',
                marginLeft   : 'auto',
                marginRight  : 'auto',
                borderRadius : 0,
                isClick      : true,
                isScroll     : true,
                isLightBg    : true,
            }

            var settings = $.extend( defaultOptions, options );

            function onScroll( settings, $links ) {
                $links.each( function() {
                    var hash      = $( this ).attr('href');
                    var $target   = $( hash );
                    var scrollTop = $( document ).scrollTop();

                    if ( $target.position().top <= scrollTop 
                        && $target.position().top + $target.outerHeight() > scrollTop ) {
                        $links.css({
                            'color' : settings.colorDefault
                        });
                        $( this ).css({
                            'color' : settings.colorActive
                        });
                    }
                })
            }

            function clickInit( settings, $links ) {
                $links.on( 'click', function( e ) {
                    e.preventDefault();
                    var hash    = $( this ).attr('href');
                    var $target = $( hash );

                    $( 'html, body' ).animate({
                        scrollTop: $target.offset().top
                    }, settings.animateTime, function() {
                        window.location.hash = hash;
                    });
                });
            }

            function onLightBg( settings ) {
                var $menu    = $( this );
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;

                if ( scrolled > 0 ) {
                    $menu.css({
                        'background-color' : settings.bgColor,
                        'opacity'          : settings.opacity,
                        'width'            : settings.width,
                        'border-radius'    : settings.borderRadius,
                        'margin-right'     : settings.marginRight,
                        'margin-left'      : settings.marginLeft,
                    });
                };
            }

            return this.each( function() {
                var $links = $( 'a[href^="#"]', this );

              /*  settings.isClick && clickInit.call( this, $links );
                settings.isLightBg && $( document ).on( 'scroll.menuLighting', onLightBg.bind( this ) );
                settings.isScroll && $( document ).on( 'scroll.menuLighting', onScroll.bind( this, $links ) );*/
                settings.isClick && clickInit( settings, $links );
                settings.isLightBg && $( document ).on( 'scroll.menuLighting', onLightBg( this ));
                settings.isScroll && $( document ).on( 'scroll.menuLighting', onScroll( settings, $links ) );
            });
        },

        destroy : function() {
                $( window ).off('.menuLighting');
        }
    };

    $.fn.menuLighting = function( method ) {
        if ( methods[ method ] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }
        else if ( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }
        else {
            $.error( 'Метод с именем ' + method + ' не существует для jQuery.menuLighting' );
        }
    };

})( jQuery );
