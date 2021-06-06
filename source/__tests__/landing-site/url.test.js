describe('Basic URL Tests', () => {
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/source');
      await page.waitForTimeout(500);
    });

    it('Test1: Home page url should not contain any hashing', async () => {
        let url = page.url();
        expect(url).not.toMatch('#');
    });

    it('Test2: Features page url should contain the correct hashing', async () => {
        await page.click('#menu-button > svg');
        await page.click('#features-button');
        let url = page.url();
        expect(url).toMatch('#features');
    }, 10000);

    it('Test3: Return to home page via home button, url should contain no hashing', async () => {
        await page.click('#menu-button > svg');
        await page.click('#home-button');
        let url = page.url();
        expect(url).not.toMatch('#');
    }, 10000);

    it('Test4: Download page url should contain the correct hashing', async () => {
        await page.click('#menu-button > svg');
        await page.click('#download-button');
        let url = page.url();
        expect(url).toMatch('#download');
    }, 10000);

    it('Test5: Return to home page via logo, url should contain no hashing', async () => {
        await page.click('#menu-button > svg');
        await page.click('#primary-navigation');
        let url = page.url();
        expect(url).not.toMatch('#');
    }, 10000);

    it('Test6: Loop from home->features->download->home', async () => {
        await page.click('#menu-button > svg');
        await page.click('#features-button');
        let url = page.url();
        expect(url).toMatch('#features');
        await page.click('#menu-button > svg');
        await page.click('#download-button');
        url = page.url();
        expect(url).toMatch('#download');
        await page.click('#menu-button > svg');
        await page.click('#home-button');
        url = page.url();
        expect(url).not.toMatch('#');
    }, 30000);

    it('Test7: Back test', async () => {
        await page.goBack();
        let url = page.url();
        expect(url).toMatch('#download');
        await page.goBack();
        url = page.url();
        expect(url).toMatch('#features');
        await page.goBack();
        url = page.url();
        expect(url).not.toMatch('#');
    }, 10000);

    /* it('Test8: Start JRNLing button test', async () => {
        await page.click('section > div.text-and-button > div > button');
        let url = page.url();
        expect(url).toMatch('#download');
    }, 10000); CURSED!!!!!*/

});