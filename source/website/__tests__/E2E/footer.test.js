describe ('Child of Main Tests', () => {
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500/source');
        await page.waitForTimeout(500);
    });

    it('Test1: Home page footer', async () => {
        await page.click('#primary-navigation');
        let footer = await page.$eval('footer > h6', (e) => e.innerHTML);
        expect(footer).toBe('© Orbis 2021.');
    }, 10000);

    it('Test2: Features page footer', async () => {
        await page.click('#menu-button > svg');
        await page.click('#features-button');
        let footer = await page.$eval('footer > h6', (e) => e.innerHTML);
        expect(footer).toBe('© Orbis 2021.');
    }, 10000);

    it('Test4: Download page child', async () => {
        await page.click('#menu-button > svg');
        await page.click('#download-button');
        let footer = await page.$eval('footer > h6', (e) => e.innerHTML);
        expect(footer).toBe('© Orbis 2021.');
    }, 10000);

    it('Test5: Home page footer from Download', async () => {
        await page.goBack();
        let footer = await page.$eval('footer > h6', (e) => e.innerHTML);
        expect(footer).toBe('© Orbis 2021.');
    }, 10000);

    it('Test6: Footer test', async () => {
        let footer = await page.$eval('footer > h6', (e) => e.innerHTML);
        expect(footer).toBe('© Orbis 2021.');
    }, 10000)
});