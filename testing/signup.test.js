const { Builder, By, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:5173/'); // 
}, 20000);

afterAll(async () => {
  await driver.quit();
});

test('SignUp with valid credentials', async () => {

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  await driver.findElement(By.id('username')).sendKeys('aditya');
  await sleep(1000);
  
  await driver.findElement(By.id('email')).sendKeys('test@example.com');
  await sleep(1000);

  await driver.findElement(By.id('password')).sendKeys('pass');
  await sleep(1000);

  await driver.findElement(By.id('signupbtn')).click();
  await sleep(1000);

  // Wait for login message
  const messageElem = await driver.wait(
    until.elementLocated(By.id('signupMessage')),
    5000
  );

  const messageText = await messageElem.getText();
  expect(messageText).toMatch(/Password must be at least 8 characters long!/i);
});


test('SignUp with valid credentials', async () => {

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const usernameInput = await driver.findElement(By.id('username'));
      await usernameInput.clear();
      await sleep(1000);
      await usernameInput.sendKeys('aditya');
      await sleep(1000);

      const emailInput = await driver.findElement(By.id('email'));
      await emailInput.clear();
      await sleep(1000);
      await emailInput.sendKeys('adityakamboj1511@gmail.com');
      await sleep(1000);
    
      const passwordInput = await driver.findElement(By.id('password'));
      await sleep(1000);
      await passwordInput.clear();
      await passwordInput.sendKeys('aditya1234');
      await sleep(1000);
  
    await driver.findElement(By.id('signupbtn')).click();
    await sleep(1000);
  
    // Wait for login message
    const messageElem = await driver.wait(
      until.elementLocated(By.id('signupMessage')),
      5000
    );
  
    const messageText = await messageElem.getText();
    expect(messageText).toMatch(/Password must contain at least one special character!/i);
  },10000);