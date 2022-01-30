const {chromium} = require('playwright');
(async () => {
const browser = await chromium.launch({headless:false});
//const browser = await chromium.launch(); --this is faster
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://google.com");
await page.click("#login")
await page.type("#email","ameera@gmail.com")
await page.waitForSelector("#messageloggedin",{state:"visible"})
await browser.close();
})()

