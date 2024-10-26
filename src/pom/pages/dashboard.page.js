const SideMenuComponent = require('./../components/common/sideMenu.component');
const BasePage = require('./base.page');

class DashboardPage extends BasePage {
  constructor() {
    super('dashboard');
    this.sideMenu = new SideMenuComponent();
  }
}

module.exports = DashboardPage;
