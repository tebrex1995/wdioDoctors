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

    await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
    await pages('doctors')
      .addDoctorModal.input('phone')
      .setValue('11111111111');
    await pages('doctors')
      .addDoctorModal.input('email')
      .setValue('test@email.com');
    await pages('doctors').addDoctorModal.input('education').setValue('Basic');
    await pages('doctors').addDoctorModal.input('designation').setValue('test');

    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    expect(pages('doctors').specialistCart(8).name).toHaveText('John Doe');
    expect(pages('doctors').specialistCart(8).education).toHaveText('Basc', {
      ignoreCase: true,
    });
  });

  it('Close a modal window for adding a new docot', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.closeBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
