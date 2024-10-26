const AddDoctorComponent = require('../components/doctors/add-doctor-component');
const ListHeaderComponent = require('../components/doctors/list-header-components');

class DoctorsPage {
  constructor() {
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
  async open() {
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'
    );
  }
}

module.exports = DoctorsPage;
