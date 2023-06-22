// Import the Mailosaur library
const MailosaurClient = require('mailosaur');
const mailosaur = new MailosaurClient('pNaQKkLjJfwcptrFqvbnSX0gwYZfvcfk');

describe("Voucher Purchase Flow", () => {
  it("Should successfully purchase a voucher and verify email confirmation", () => {
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

    // Manually enter the payment details through the Cypress interface
    cy.log("Please enter the payment details manually in the Cypress interface");

    // Wait for the payment details to be entered manually
    cy.pause();
 
   /* I've had to do this next part manually because I can't find the element 
    selectors (Potential bug?) to fill out the Payment Details field */

    // Wait for the payment details to be entered manually
    cy.log("Please enter the payment details manually in the Cypress interface");
    cy.pause();

    // Click the Submit button manually in the Cypress interface
    
    // Assert that the "Purchase Complete" message is displayed
    cy.get('body > div.flex.flex-col.h-full > header > span').should('contain', 'Purchase Complete');

    // Assert that the payment success message is displayed
    cy.get('body > div.flex.flex-col.h-full > div > div > div.container.my-4.text-center > p.text-xl.font-medium.mb-8')
      .should('contain', 'Payment accepted, thank you!');

// Retrieve the email from Mailosaur using the message ID or search criteria
mailosaur.messages.get('qlygy2tu', { sentTo: 'dollar-noted@qlygy2tu.mailosaur.net' }).then((email) => {
  // Assert that the email is not null
  expect(email).not.to.be.null;

  // Assert the email content, subject, or other details
  expect(email.subject).to.contain('Voucher Purchase Confirmation');
  expect(email.html.body).to.contain('Thank you for purchasing a voucher.');

  // Continue with other assertions or actions related to the email

  // Visit the Mailosaur website to verify email confirmation
  cy.visit('https://mailosaur.com/app/servers/qlygy2tu/get-started');

  // Perform actions on the Mailosaur website using Cypress commands and element selectors
  cy.get('#email-list').should('be.visible');
  cy.get('#search-input').type('Voucher Purchase Confirmation');
  cy.get('#search-button').click();
      

    // Click the "Done" button with a slight delay
    cy.wait(2000); // Adjust the delay time as needed
    cy.get('body > div.flex.flex-col.h-full > div > div > div.container.mb-10 > button').click();

    // End the test and stop further execution
    cy.pause();
  
  }); 
  }); 

});



/*
// Assert that the Checkout page is displayed
cy.get('span[data-target="page.headerText"]').should('contain', 'Checkout');

// Log a message to enter payment details manually
cy.log("Please enter the payment details manually in the Cypress interface");

// Pause the test and wait for payment details to be entered manually
cy.pause();

// After payment details are entered manually, we can proceed to verify email confirmation

// Verify that the email has been received on the email service (e.g., Mailosaur)
// You will need to replace 'EMAIL_SERVICE_API_KEY' and 'EMAIL_RECEIPT_IDENTIFIER' with appropriate values
cy.request({
  method: 'GET',
  url: 'https://api.mailosaur.com/api/messages/search',
  auth: {
    username: 'EMAIL_SERVICE_API_KEY',
    password: ''
  },
  qs: {
    sentTo: 'EMAIL_RECEIPT_IDENTIFIER'
  }
}).then((response) => {
  // Assert that the email has been received
  expect(response.status).to.equal(200);
  expect(response.body.items).to.have.lengthOf.at.least(1);

  // Click the "Done" button with a slight delay
  cy.wait(2000); // Adjust the delay time as needed
  cy.get('body > div.flex.flex-col.h-full > div > div > div.container.mb-10 > button').click();

  // Assert that the user is back on the home page
  cy.url().should('eq', 'https://gift-cards.phorest.com/salons/demous#');
});
*/
 


