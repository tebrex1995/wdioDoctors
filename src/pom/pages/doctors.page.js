const BasePage = require('./base.page');
const {
  AddDoctorModal,
  ListHeaderComponent,
  SpecialistCardComponent,
} = require('./../components');

class DoctorsPage extends BasePage {
  constructor() {
    super('doctors');
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorModal();
  }

  specialistCart(id) {
    return new SpecialistCardComponent(id);
  }
}

module.exports = DoctorsPage;
