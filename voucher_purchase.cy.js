describe("Voucher Purchase Flow", () => {
    it("Should successfully purchase a voucher", () => {
      // Visit the demo salon page
      cy.visit("https://gift-cards.phorest.com/salons/demous#");
  
      // Select the $50 voucher option
      cy.get('input[data-voucher-value="50.00"]').click();
  
      // Enter email address
      cy.get('input[data-target="email.purchaserEmailInput"]').type("johndoe.2023@gmail.com");
  
      // Enter first name
      cy.get('input[data-target="name.purchaserFirstNameInput"]').type("John");
  
      // Enter last name
      cy.get('input[data-target="name.purchaserLastNameInput"]').type("Doe");
  
      // Click on the checkout button with {force: true} option
      cy.get('button').contains('Checkout').click({ force: true });
  
      // Verify the value of the gift card
      cy.contains('Value of gift card').next('p#confirm-voucher-value').should('contain', '$50.00');
  
      // Verify the sender's email address
      cy.contains('Send receipt to').next('p#confirm-purchaser-email').should('contain', 'johndoe.2023@gmail.com');
  
      // Verify the recipient's email address
      cy.contains('Send gift card to').next('p#confirm-recipient-email').should('contain', 'johndoe.2023@gmail.com');
  
      cy.wait(3000);
  
      // Click on the "Confirm Details" button if everything matches up
      cy.get('button[data-action="confirm#confirmAction"]').click();
  
      // Assert that the Checkout page is displayed
      cy.get('span[data-target="page.headerText"]').should('contain', 'Checkout');
  
      // Manually enter the payment details through the Cypress interface
      cy.log("Please enter the payment details manually in the Cypress interface");
  
      // Wait for the payment details to be entered manually
      cy.pause();
  // Assert that the "Purchase Complete" message is displayed
  cy.get('body > div.flex.flex-col.h-full > header > span').should('contain', 'Purchase Complete');

  // Assert that the payment success message is displayed
  cy.get('body > div.flex.flex-col.h-full > div > div > div.container.my-4.text-center > p.text-xl.font-medium.mb-8')
    .should('contain', 'Payment accepted, thank you!');

  // Assert that the gift card and receipt sent message is displayed
  cy.contains('Your gift card has been sent. We\'ve also sent you a receipt.');

  // Click the "Done" button
  cy.get('body > div.flex.flex-col.h-full > div > div > div.container.mb-10 > button').click();
  
      // You can add more assertions or verifications here if needed
    });
  });
  