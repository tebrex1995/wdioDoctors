describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard'
    );
  });

  it('Verify page title ', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App'
    );
  });

  it('Open modal for adding new doctor', async () => {
    //click on doctors item in the side menu
    const doctorsBtn = await $("[title = 'doctors']");
    await doctorsBtn.click();
    //click on add new doctor btn
    await $('.specialization-types button.e-control').click();

    //check that modal window is displayed
    await expect($('.new-doctor-dialog')).toBeDisplayed();
  });
  it('Add a new doctor', async () => {
    //Click on doctors item in the side menu
    const doctorsBtn = await $("[title = 'doctors']");
    await doctorsBtn.click();
    //click on add new doctor btn
    await $('.specialization-types button.e-control').click();
    //wait for visibility of modal window
    // await $('.new-doctor-dialog').waitForDispalyed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('11111111111');
    await $('[name = "Email"]').setValue('test@email.com');
    await $('[name = "Education"]').setValue('Basic');
    await $('[name = "Designation"]').setValue('test');

    await $('.e-footer-content button.e-primary').click();

    await expect($('.new-doctor-dialog')).not.toBeDisplayed();

    expect($('$Specialist_8').$('.name').toHaveText('John Doe'));
    expect(
      $('$Specialist_8')
        .$('.education')
        .toHaveText('Basc', { ignoreCase: true })
    );
  });

  it('Close a modal window for adding a new docot', async () => {
    const doctorsBtn = await $("[title = 'doctors']");
    await doctorsBtn.click();

    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
  });
});
