# Horizontal Scroll

A lightweight javascript framework that replaces the default mouse scrolling function with one that scrolls horizontally

## How it works

Horizontal Scroll creates an event listener that will trigger when a user scrolls over the selected element. It gathers the mousewheel delta and applies it to the documents scrollLeft property.

## Usage

Download and install horizontalscroll.js either by importing or adding horizontalscroll.js to your header

```html
<script src="horizontalscroll.js"></script>
```
```javascript
import horizontalScroll from 'horizontalscroll';
```

Init:
```javascript
horizontalScroll.init('.selector');
```
Destroy:
```javascript
horizontalScroll.destroy();
```
