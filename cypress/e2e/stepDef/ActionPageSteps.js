import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { actionPage } from '../pageObjects/ActionPageObjects';

Given('I am on action page', () => {
  actionPage.visitActionPage();
});

When('I fill in email {string} and password {string}', (email, password) => {
  actionPage.fillInUserEmail(email);
  actionPage.fillPassword(password);
});

Then('I can submit coupon {string}', (couponNumber) => {
  actionPage.submitCoupon(couponNumber);
});
