export default class Navigation {
  constructor() {
    this.toggleBtn = document.querySelector('.nav__toggle-button');
    this.burger = document.querySelector('.nav__burger');
    this.navList = document.querySelector('.nav ul');
    this.navLinks = [
      ...document.querySelectorAll('.nav a'),
    ]; // spread nodeList to array
    this.tabPort = window.matchMedia('(max-width: 56.25em)');
    this.navExpanded = false;
    this.events();
  }
  events() {
    this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));
    this.tabPort.addListener(this.respondToMediaQuery(this.tabPort));
    window.addEventListener('resize', () => this.respondToMediaQuery(this.tabPort));
  }
  respondToMediaQuery(query) {
    if (query.matches) {
      if (!this.navExpanded) {
        this.closeNav();
      } else {
        this.openNav();
      }
    } else {
      this.openNav();
    }
  }
  toggleNav() {
    if (this.navList.style.maxHeight) {
      this.navExpanded = false;
      this.closeNav();
    } else {
      this.navExpanded = true;
      this.openNav();
    }
  }
  openNav() {
    this.navList.setAttribute('aria-hidden', 'false');
    this.burger.classList.add('nav__burger--active');
    this.toggleBtn.classList.add('nav__toggle-button--active');
    this.navList.style.maxHeight = `${this.navList.scrollHeight}px`;
    this.navLinks.forEach(item => item.setAttribute('tabindex', '0'));
  }
  closeNav() {
    this.navList.setAttribute('aria-hidden', 'true');
    this.burger.classList.remove('nav__burger--active');
    this.toggleBtn.classList.remove('nav__toggle-button--active');
    this.navList.style.maxHeight = null;
    this.navLinks.forEach(item => item.setAttribute('tabindex', '-1'));
  }
}
