/**
 * Horizontal sroll left function
 * @param {selector} hover trigger element
 */

const horizontalScroll = {
  scrollElement: '',
  init(selector){
    this.scrollElement = document.querySelector.bind(document)(selector);

    if (document.addEventListener) {
      this.scrollElement.addEventListener("mousewheel", this.MouseWheelHandler(), false);
      this.scrollElement.addEventListener("DOMMouseScroll", this.MouseWheelHandler(), false);
    } else {
        sq.attachEvent("onmousewheel", MouseWheelHandler());
    }
  },
  MouseWheelHandler(){
    return function (e) {

      if (window.innerWidth >= 768 ) {
        
        e.preventDefault();

        var e = window.event || e;
        //Determine if Chrome due to Chrome 61 removing document.body scroll events.
        //Ref: https://stackoverflow.com/questions/45061901/chrome-61-body-doesnt-scroll
        var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        //Get crossbrowser wheel delta
        var delta = e.wheelDelta ? e.wheelDelta : - e.detail * 25;
        scrollNode.scrollLeft =  scrollNode.scrollLeft - delta;

      }

      return false;
    }
  },
  destroy(){
    this.scrollElement.removeEventListener("mousewheel", this.MouseWheelHandler(), false);
    this.scrollElement.removeEventListener("DOMMouseScroll", this.MouseWheelHandler(), false);
  }
}

export default horizontalScroll;
