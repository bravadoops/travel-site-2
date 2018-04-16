import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
class RevealOnScroll {
  constructor (ele, offset) {
    this.itemToReveal = ele;
    this.offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }
  hideInitially() {
    this.itemToReveal.addClass('reveal-item');
  }
  createWaypoints() {
    var mainObject = this;
    this.itemToReveal.each(function() {

      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: mainObject.offset
      });
    });
  }

}

export default RevealOnScroll;
