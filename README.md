Voucher Purchase Cypress Test
This project contains Cypress test scripts to automate the voucher purchase flow on a website and verify the email receipt using Mailosaur.

Prerequisites
Node.js (version 14 or above)
Cypress (installed globally or locally within the project)
Setup
Clone this repository to your local machine.

Install the project dependencies by running the following command in the project root directory:

shell
Copy code
npm install

Create a cypress.json file in the project root directory and add the following configuration:

json
Copy code
{
  "mailosaurApiKey": "YOUR_MAILOSAUR_API_KEY",
  "mailosaurServerId": "YOUR_MAILOSAUR_SERVER_ID"
}
Replace "YOUR_MAILOSAUR_API_KEY" with your Mailosaur API key and "YOUR_MAILOSAUR_SERVER_ID" with the ID of your Mailosaur server.

Configuration
The test script is configured to visit the demo salon page at "https://gift-cards.phorest.com/salons/demous#". If you want to test a different website, modify the URL in the test script (voucher-purchase.spec.js).
Running the Test
To open the Cypress Test Runner, run the following command:

shell
Copy code
npm run cy:open
Click on the voucher-purchase.spec.js file in the Cypress Test Runner to run the test.

The test will execute the voucher purchase flow, enter payment details manually, and verify the success message.

After the test completes, it will automatically fetch the email from Mailosaur and check if the email subject contains the expected text.

Notes
Make sure to replace the placeholders "YOUR_MAILOSAUR_API_KEY" and "YOUR_MAILOSAUR_SERVER_ID" in the cypress.env.json file with your actual Mailosaur API key and server ID.

The mailosaur.js file and custom Cypress command are provided as a sample implementation. You may need to adjust the code based on your specific requirements and Mailosaur usage.
