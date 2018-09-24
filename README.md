# menuLighting

When you start scrolling the page, the top menu goes smoothly behind you and depending on what you are currently viewing, the corresponding menu item will be highlighted 

### Installation

Connection of the plugin-menu.js script (the file can be renamed) via the script tag and the src attribute in the html file

### Usage


This identifier or class must match the value of the href attribute of the menu link that logically refers to this section.

```js
// Initialize plugin with default options.

$('#test').menuLighting();

// Destroy plugin 

// $('#test').menuLighting('destroy');

// Initialize plugin with user defined options.

$('#test').menuLighting({
    	color_active: "green", // indicate "active" color
    	color_default: "", // indicate "inactive" color
        time: 500 // time of transition to the selected block after a click on the menu link
   });

An additional option is to enable or disable a particular plug-in functionality (by adding true / false). By default, these are the functions onScroll, onClick, onLight_bg:

$('#test').menuLighting({
...
        onLight: true,
        onScroll: true,
        onLight_bg: true
  });
```

### Setup options

```js
// Default plugin options.
var settings = $.extend({
    color_default: "",
    color_active: "",
    time: 500,
    background_color: "red",
    opacity: "0.9",
    width: "80%",
    margin_left: "auto",
    margin_right: "auto",
    border_radius: 0
    onLight: true,
    onScroll: true,
    onLight_bg: true
}, options);
     
```

### Example

HTML

```HTML

 <div class="main-menu">
            <ul id = "test" class="main-menu__list j-main-menu__list">
                <li class="main-menu__item"><a class="main-menu__link" href="#main">Main</a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#services">Services/a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#equipment">Equipment</a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#contacts">Contacts</a></li>
            </ul>
        </div>
```

JS

```js

   $('#test').menuLighting({
    	color_active: "orange",
    	color_default: "",
        time: 1000
    });

```
