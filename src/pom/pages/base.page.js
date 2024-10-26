class BasePage {
  constructor(url) {
    this.url = url;
  }
  open() {
    return browser.url(`/showcase/angular/appointmentplanner/#/${this.url}`);
  }
}

module.exports = BasePage;
