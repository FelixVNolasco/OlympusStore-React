// MANDAMOS A LLAMAR LOS RECURSOS QUE UTILIZAREMOS DE CADA PAQUETE NODE
const {Given, When, And, Then, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai'); 
const webdriver = require('selenium-webdriver');
const {By, Builder, Key, until, assert} = require('selenium-webdriver');
const fs = require('fs');

setDefaultTimeout(60 * 1000) 

let driver = new webdriver.Builder()
.forBrowser('chrome')
.build()


Given('the user visit the Olympus main page', async() => {
    await driver.get('http://localhost:3000/')
  });

  When('the user scroll down', async() => {
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)')
    await driver.sleep(1000)
  });

  When('select basketball section', async()=> {
    const scrollResults = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/a[1]'))
    await scrollResults.click(); 
  });

  Then('the user see the main products for Basketball', function () {
    
  });