describe ('Child of Main Tests', () => {
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500/source');
        await page.waitForTimeout(500);
    });

    it('Test1: Home page child', async () => {
        let main = await page.$('main');
        expect(main.firstChild.nodeName).toBe('h1');
    });

    it('Test2: Features page child', async () => {
        await page.click('#features-button');
        let main = await page.$('main');
        expect(main.firstChild.nodeName).toBe('feature-page');
    });

    it('Test3: Home page child from features', async () => {
        await page.goBack();
        let main = await page.$('main');
        expect(main.firstChild.nodeName).toBe('h1');
    });

    it('Test4: Download page child', async () => {
        await page.click('#features-button');
        let main = await page.$('main');
        expect(main.firstChild.nodeName).toBe('download-hero');
    });

    it('Test5: Home page child from Download', async () => {
        await page.goBack();
        let main = await page.$('main');
        expect(main.firstChild.nodeName).toBe('h1');
    });

}); 