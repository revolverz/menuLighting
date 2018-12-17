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

$( '#test' ).menuLighting({
    	colorActive  : 'green', // indicate "active" color
    	colorDefault : '', // indicate "inactive" color
        time         : 500, // time of transition to the selected block after a click on the menu link
   });


### Setup options

```js
// Default plugin options.
          var defaultOptions = {
                colorDefault : '',
                colorActive  : '',
                time         : 500,
                bgColor      : 'green',
                opacity      : '0.9',
                width        : '80%',
                marginLeft   : 'auto',
                marginRight  : 'auto',
                borderRadius : 0,
                isClick      : true,
                isScroll     : true,
                isLightBg    : true,
            }
     
```

### Example

HTML

```HTML

 <div class="main-menu">
            <ul id = "menu" class="main-menu__list j-main-menu__list">
                <li class="main-menu__item"><a class="main-menu__link" href="#main">Main</a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#services">Services/a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#equipment">Equipment</a></li>
                <li class="main-menu__item"><a class="main-menu__link" href="#contacts">Contacts</a></li>
            </ul>
        </div>
```

JS

```js
 $( function() {
     $( '#menu' ).menuLighting({
     colorActive  : "orange",
     colorDefault : "",
     animateTime: 1000,
    });
});
```
