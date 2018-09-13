# menuLighting

When you start scrolling the page, the top menu goes smoothly behind you and depending on what you are currently viewing, the corresponding menu item will be highlighted 

### Installation

Connection of the plugin-menu.js script (the file can be renamed) via the script tag and the src attribute in the html file

### Usage


This identifier or class must match the value of the href attribute of the menu link that logically refers to this section.

```js
// Initialize plugin with default options.

$('#test').menuLighting();

// Initialize plugin with user defined options.

$('#test').menuLighting({
    	color_active: "green", // indicate "active" color
    	color_default: "", // indicate "inactive" color
        time: 500 // time of transition to the selected block after a click on the menu link
   });
```

### Setup options

```js
// Default plugin options.

var settings = $.extend({
        color_default: "",
        color_active: "",
        time: 500
  }, options);
```
