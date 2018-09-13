# menuLighting


When you start scrolling the page, the top menu goes smoothly behind you and depending on what you are currently viewing, the corresponding menu item will be highlighted 

# Usage

// Initialize plugin with default options.
$('#test').menuLighting();

// Initialize plugin with user defined options.

$('#test').menuLighting({
    	color_active: "green",
    	color_default: "",
        time: 500
   });


# Setup options

// Default plugin options.
var settings = $.extend({
        color_default: "",
        color_active: "",
        time: 500
  }, options);

