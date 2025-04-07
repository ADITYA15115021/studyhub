const { Builder, By, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:5173/login'); // change URL if needed
}, 20000);

afterAll(async () => {
  await driver.quit();
});

test('login with valid credentials', async () => {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await driver.findElement(By.id('email')).sendKeys('test@example.com');
  await sleep(1000);
  await driver.findElement(By.id('password')).sendKeys('password123');
  await sleep(1000);
  await driver.findElement(By.id('loginbtn')).click();
  await sleep(1000);
  // Wait for login message
  const messageElem = await driver.wait(
    until.elementLocated(By.id('loginMessage')),
    5000
  );

  const messageText = await messageElem.getText();
  expect(messageText).toMatch(/user does not exist!/i);
});




test('login with valid credentials', async () => {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
   
  const emailInput = await driver.findElement(By.id('email'));
  await emailInput.clear();
  await sleep(1000);
  await emailInput.sendKeys('adityakamboj1511@gmail.com');
  await sleep(1000);

  const passwordInput = await driver.findElement(By.id('password'));
  await sleep(1000);
  await passwordInput.clear();
  await passwordInput.sendKeys('aditya@123456');
  await sleep(1000);

  await driver.findElement(By.id('loginbtn')).click();
  await sleep(1000);

  // Wait for login message
  const messageElem = await driver.wait(
    until.elementLocated(By.id('loginMessage')),
    5000
  );

  const messageText = await messageElem.getText();
  expect(messageText).toMatch(/Login successfull!/i);
},10000);
