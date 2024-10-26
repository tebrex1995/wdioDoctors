const AddDoctorComponent = require('../components/doctors/add-doctor-component');
const ListHeaderComponent = require('../components/doctors/list-header-components');
const BasePage = require('./base.page');

class DoctorsPage extends BasePage {
  constructor() {
    super('doctors');
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
}

module.exports = DoctorsPage;
