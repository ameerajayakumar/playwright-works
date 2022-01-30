const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({ //record video
    recordVideo: {
      dir: "./videos/"
    }
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto('https://www.google.com/?gws_rd=ssl');

  // Click [aria-label="Search"]
  await page.click('[aria-label="Search"]');

  // Fill [aria-label="Search"]
  await page.fill('[aria-label="Search"]', 'playwright');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=playwright&source=hp&ei=A6JtYaOPFYSW4-EPgpOn6AQ&iflsig=ALs-wAMAAAAAYW2wE6ZkFxL0uY7TROmOyA35ULV_LFSf&ved=0ahUKEwjjnP7qsdTzAhUEyzgGHYLJCU0Q4dUDCAc&uact=5&oq=playwright&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOhEIABDqAhCPARCMAxDlAhCLAzoOCAAQ6gIQjwEQjAMQ5QI6EQguEOoCEI8BEIwDEOUCEIsDOgsIABCABBCxAxCDAToICC4QgAQQsQM6CwguEIAEELEDEIMBOggIABCABBDJAzoFCAAQkgM6CwguEIAEEMcBEK8BOgoIABCxAxCDARAKUKZHWJ5YYMxaaAFwAHgAgAFciAG1BpIBAjEwmAEAoAEBsAEK&sclient=gws-wiz' }*/),
    page.press('[aria-label="Search"]', 'Enter')
  ]);

  // Click text=Playwright: Fast and reliable end-to-end testing for modern ...
  await page.click('text=Playwright: Fast and reliable end-to-end testing for modern ...');
  // assert.equal(page.url(), 'https://playwright.dev/');

  // Click text=Get started
  await page.click('text=Get started');
  // assert.equal(page.url(), 'https://playwright.dev/docs/intro');

  // Click [placeholder="Search"]
  await page.click('[placeholder="Search"]');

  // Fill [placeholder="Search"]
  await page.fill('[placeholder="Search"]', 'test');

  // Click text=Test Generator
  //await page.click('text=Test Generator');
  // assert.equal(page.url(), 'https://playwright.dev/docs/codegen');

  // Click text=🌜🌞
  await page.click('text=🌜🌞');

  // Click [placeholder="Search"]
  await page.click('[placeholder="Search"]');

  // Fill [placeholder="Search"]
  await page.fill('[placeholder="Search"]', 'jest');

  // Click #option-76056943 >> :nth-match(:text("Jest"), 2)
 // await page.click('#option-76056943 >> :nth-match(:text("Jest"), 2)');
  // assert.equal(page.url(), 'https://playwright.dev/docs/showcase#frameworks');

  // Click text=Python
  await page.click('text=Python');
  // assert.equal(page.url(), 'https://playwright.dev/python/docs/showcase/#frameworks');

  // ---------------------
  await context.close();
  await browser.close();
})();