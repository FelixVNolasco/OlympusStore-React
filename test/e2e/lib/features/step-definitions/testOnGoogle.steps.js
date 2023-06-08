//MANDAMOS A LLAMAR LOS RECURSOS QUE UTILIZAREMOS DE CADA PAQUETE NODE
const {Given, When, And, Then, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai'); 
const webdriver = require('selenium-webdriver');
const {By, Builder, Key, until, assert} = require('selenium-webdriver');
const fs = require('fs');

setDefaultTimeout(60 * 1000)

// CONSTRUIMOS NUESTRO CONSTROLADOR (API WEBDRIVER)
let driver = new webdriver.Builder()
.forBrowser('chrome')
.build();


Given('I am on the Google search page', async function () {
  await this.driver.get('https://www.google.com');
});

When('I enter {string} in the search bar', async function (searchTerm) {
  const searchInput = await this.driver.findElement(By.name('q'));
  await searchInput.sendKeys(searchTerm);
});

When('I press Enter', async function () {
  const searchInput = await this.driver.findElement(By.name('q'));
  await searchInput.sendKeys(Key.RETURN);
});

Then('I should see search results', async function () {
  await this.driver.wait(until.titleContains('example search'), 5000);
});

When('I scroll down the page', async function () {
  await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
  await this.driver.sleep(1000); // Espera 1 segundo para que la página se desplace completamente
});

When('I click on the fifth search result', async function () {
  const searchResults = await this.driver.findElements(By.css('.g'));
  const fifthResult = searchResults[4]; // Selecciona el quinto elemento (índice 4)
  await fifthResult.click();
});

Then('I should be redirected to the selected page', async function () {
  const pageTitle = await this.driver.getTitle();
  assert.notStrictEqual(pageTitle, 'Google'); // Verifica que el título de la página no sea "Google"
});
