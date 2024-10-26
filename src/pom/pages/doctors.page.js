const BasePage = require('./base.page');
const { AddDoctorModal, ListHeaderComponent } = require('./../components');

class DoctorsPage extends BasePage {
  constructor() {
    super('doctors');
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorModal();
  }
}

module.exports = DoctorsPage;
