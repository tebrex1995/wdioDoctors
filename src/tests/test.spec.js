const { pages } = require('../pom');

describe('Doctors page', () => {
  beforeEach(async () => {
    await pages('dashboard').open();
  });

  it('Verify page title ', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App'
    );
  });

  it('Open modal for adding new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });
  it('Add a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('11111111111');
    await $('[name = "Email"]').setValue('test@email.com');
    await $('[name = "Education"]').setValue('Basic');
    await $('[name = "Designation"]').setValue('test');

    await $('.e-footer-content button.e-primary').click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    expect($('$Specialist_8').$('.name').toHaveText('John Doe'));
    expect(
      $('$Specialist_8')
        .$('.education')
        .toHaveText('Basc', { ignoreCase: true })
    );
  });

  it('Close a modal window for adding a new docot', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
