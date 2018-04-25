import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor(){
    this.element = $('.site-header');
    this.triggerElement = $('.large-hero__title');
    this.createWaypoints();
    this.pageSection = $('.page-section');

    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScroll();

  }

  addSmoothScroll(){
    this.headerLinks.smoothScroll();
  }

  createWaypoints(){
    var that = this;
    new Waypoint({
      element:this.triggerElement[0],
      handler: function(direction){
        if (direction == "down"){
            that.element.addClass('site-header--darker');
        } else {
            that.element.removeClass('site-header--darker');
        }

      }
    });
  }

  createPageSectionWaypoints(){
    var that = this;
    console.log(this.headerLinks);
    this.pageSection.each(function() {


      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(){
          var currentLink = currentPageSection.getAttribute('data-matching-link');
// use jquery to select
          //console.log(currentLink);
          that.headerLinks.removeClass('is-current-section');
          console.log(that.headerLinks);
          $(currentLink).addClass('is-current-section');
        }
      });

    });
  }
}

export default StickyHeader;
