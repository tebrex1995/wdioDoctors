const Header = require('../components/common/header.component');
const SideMenuComponent = require('./../components/common/sideMenu.component');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenuComponent();
  }
  open() {
    return browser.url(`/showcase/angular/appointmentplanner/#/${this.url}`);
  }
}

module.exports = BasePage;
