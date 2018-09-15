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
