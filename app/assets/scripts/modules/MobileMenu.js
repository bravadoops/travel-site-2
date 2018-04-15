import $ from 'jquery';
class MobileMenu {
  constructor() {
    this.menu = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.siteHeader = $('.site-header');
    this.events();
  }

  events() {
    this.menu.click(this.toggleMenu.bind(this));
  }

  toggleMenu(){
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menu.toggleClass('site-header__menu-icon-closed');
  }
}

export default MobileMenu;
