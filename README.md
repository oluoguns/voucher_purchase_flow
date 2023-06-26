# Voucher Purchase Cypress Tests

This repository contains Cypress tests for the voucher purchase flow.

## Prerequisites

- Node.js and npm must be installed.
- Cypress installed globally or locally in the project.

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
Navigate to the project directory:
cd voucher-purchase

Install the dependencies:
npm install

Configure Cypress baseUrl:

Open the cypress.json file.
Replace 'https://gift-cards.phorest.com' with the base URL of your server.
Save the file.

Run the tests:
To run tests using the Cypress Test Runner, use the following command:
npm run cypress:open

To run tests in headless mode and generate a test report, use the following command:
npx cypress open

Test Cases/Scripts
The following test cases/scripts are used to verify the voucher purchase flow:

Purchase Voucher:

Visit the demo salon page.
Select the $50 voucher option.
Enter the email address of the purchaser.
Enter the first name of the purchaser.
Enter the last name of the purchaser.
Click on the checkout button.
Verify the value of the gift card.
Verify the sender's email address.
Verify the recipient's email address.
Click on the "Confirm Details" button.
Assert that the Checkout page is displayed.
Manually enter the payment details.
Assert that the "Purchase Complete" message is displayed.
Assert that the payment success message is displayed.
Assert that the gift card and receipt sent message is displayed.
Click the "Done" button.

Continuous Integration with GitHub Actions
This repository is pre-configured with a GitHub Actions workflow that runs the Cypress tests on every push or pull request to the main branch. The workflow configuration is located in .github/workflows/cypress.yml. 
