describe("Voucher Purchase Flow", () => {
    it("Should successfully purchase a voucher", () => {
      
        // Visit the demo salon page
      cy.visit("https://gift-cards.phorest.com/salons/demous#");
  
      // Select the $50 voucher option
      cy.get('input[data-voucher-value="50.00"]').click();
  
      // Enter email address
      cy.get('input[data-target="email.purchaserEmailInput"]').type("sit-three@qlygy2tu.mailosaur.net");
  
      // Enter first name
      cy.get('input[data-target="name.purchaserFirstNameInput"]').type("John");
  
      // Enter last name
      cy.get('input[data-target="name.purchaserLastNameInput"]').type("Doe");
  
      // Click on the checkout button with {force: true} option
      cy.get('button').contains('Checkout').click({ force: true });
  
      // Verify the value of the gift card
      cy.contains('Value of gift card').next('p#confirm-voucher-value').should('contain', '$50.00');
  
      // Verify the sender's email address
      cy.contains('Send receipt to').next('p#confirm-purchaser-email').should('contain', 'sit-three@qlygy2tu.mailosaur.net');
  
      // Verify the recipient's email address
      cy.contains('Send gift card to').next('p#confirm-recipient-email').should('contain', 'sit-three@qlygy2tu.mailosaur.net');
  
      cy.wait(3000);
  
      // Click on the "Confirm Details" button if everything matches up
      cy.get('button[data-action="confirm#confirmAction"]').click();
  
      
      // Assert that the Checkout page is displayed
      cy.get('span[data-target="page.headerText"]').should('contain', 'Checkout');
  
      // Manually enter the payment details through the Cypress interface
      cy.log("Please enter the payment details manually in the Cypress interface");

      /* Payments Details
         Name = John Doe
         Zip code = 92606
         Card Number = 4111 1111 1111 1111
         Expiration = 12/23
         Security Code = 999
      */ 

      // Wait for the payment details to be entered manually
      cy.pause(15000);
    
      /* Once details have been entered and the Submit button has been clicked, wait for
      Payment page to load up and manually resume the test to by clicking on the 'Resume' button 
      to continue running the test 
      */
      

  // Assert that the "Purchase Complete" message is displayed
  cy.get('body > div.flex.flex-col.h-full > header > span').should('contain', 'Purchase Complete');


    cy.wait(3000);

  // Click the "Done" button
  cy.get('body > div.flex.flex-col.h-full > div > div > div.container.mb-10 > button').click();

      // You can add more assertions or verifications here if needed
    
      cy.end();
    
    });
  });


  
