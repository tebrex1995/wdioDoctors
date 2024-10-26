const DoctorsPage = require('../pom/pages/doctors.page');
const DashboardPage = require('./../pom/pages/dashboard.page');

describe('Doctors page', () => {
  const dashboardPage = new DashboardPage();
  const doctorsPage = new DoctorsPage();

  beforeEach(async () => {
    await dashboardPage.open();
  });

  it('Verify page title ', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App'
    );
  });

  it('Open modal for adding new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();

    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

    await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
  });
  it('Add a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();

    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('11111111111');
    await $('[name = "Email"]').setValue('test@email.com');
    await $('[name = "Education"]').setValue('Basic');
    await $('[name = "Designation"]').setValue('test');

    await $('.e-footer-content button.e-primary').click();

    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();

    expect($('$Specialist_8').$('.name').toHaveText('John Doe'));
    expect(
      $('$Specialist_8')
        .$('.education')
        .toHaveText('Basc', { ignoreCase: true })
    );
  });

  it('Close a modal window for adding a new docot', async () => {
    await dashboardPage.sideMenu.item('doctors').click();

    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
