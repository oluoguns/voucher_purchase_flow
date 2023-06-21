describe("Voucher Purchase Flow", () => {
  it("Should successfully purchase a voucher", () => {
    // Visit the demo salon page
    cy.visit("https://gift-cards.phorest.com/salons/demous#");

    // Select the $50 voucher option
    cy.get('input[data-voucher-value="50.00"]').click();

    // Enter email address
    cy.get('input[data-target="email.purchaserEmailInput"]').type("dollar-noted@qlygy2tu.mailosaur.net");

    // Enter first name
    cy.get('input[data-target="name.purchaserFirstNameInput"]').type("John");

    // Enter last name
    cy.get('input[data-target="name.purchaserLastNameInput"]').type("Doe");

    //Wait 3 seconds to quickly verify desired price has been selected and correct detials have been added
    cy.wait(3000);

    // Click on the checkout button with {force: true} option
    cy.get('button').contains('Checkout').click({ force: true });

    // Verify the value of the gift card
    cy.contains('Value of gift card').next('p#confirm-voucher-value').should('contain', '$50.00');

    // Verify the sender's email address
    cy.contains('Send receipt to').next('p#confirm-purchaser-email').should('contain', 'dollar-noted@qlygy2tu.mailosaur.net');

    // Verify the recipient's email address
    cy.contains('Send gift card to').next('p#confirm-recipient-email').should('contain', 'dollar-noted@qlygy2tu.mailosaur.net');

    cy.wait(3000);

    // Click on the "Confirm Details" button if everything matches up
    cy.get('button[data-action="confirm#confirmAction"]').click();

    // Assert that the Checkout page is displayed
    cy.get('span[data-target="page.headerText"]').should('contain', 'Checkout');

    // Manually enter the payment details through the Cypress interface
    cy.log("Please enter the payment details manually in the Cypress interface");

    // Wait for the payment details to be entered manually
    cy.pause();


    /* I've had to do this next part manually because I can't find the element 
    selectors (Potential bug?) to fill out the Payment Details field */

    // Assert the entered payment details before submitting
    cy.get('input[name="checkout[cardholder_name]"]').should('have.value', 'John Doe');
    cy.get('input[data-target="checkout.zipCodeInput"]').should('have.value', '92606');
    cy.get('input[data-target="checkout.cardNumberInput"]').should('have.value', '4111 1111 1111 1111');
    cy.get('input[data-target="checkout.expirationInput"]').should('have.value', '12/23');
    cy.get('input[data-target="checkout.securityCodeInput"]').should('have.value', '999');

    // Click the Submit button manually in the Cypress interface

    // Assert that the "Purchase Complete" message is displayed
    cy.get('body > div.flex.flex-col.h-full > header > span').should('contain', 'Purchase Complete');

    // Assert that the payment success message is displayed
    cy.get('body > div.flex.flex-col.h-full > div > div > div.container.my-4.text-center > p.text-xl.font-medium.mb-8')
      .should('contain', 'Payment accepted, thank you!');

    // Assert that the gift card and receipt sent message is displayed
    cy.get('body > div.flex.flex-col.h-full > div > div > div.container.my-4.text-center > p:nth-child(3)')
      .should('contain', 'Your gift card has been sent. We\'ve also sent you a receipt.');

// Click the "Done" button with a slight delay
cy.wait(2000); // Adjust the delay time as needed
cy.get('body > div.flex.flex-col.h-full > div > div > div.container.mb-10 > button')
  .click();

    // Assert that the user is back on the home page
    cy.url().should('eq', 'https://gift-cards.phorest.com/salons/demous#');

    cy.pause();

  });
});

 






