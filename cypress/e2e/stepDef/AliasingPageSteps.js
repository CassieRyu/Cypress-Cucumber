import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { aliasingPage } from '../pageObjects/AliasingPageObjects';

Given('I am on aliasing page', () => {
  aliasingPage.visitAliasingPage();
});

When('I review the comments table', () => {
  aliasingPage.firstRow();
});

Then('I can submit request the new comments {string}', (newComments) => {
  aliasingPage.requestComments(newComments);
});
