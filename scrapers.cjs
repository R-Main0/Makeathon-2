const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="goods-detail-v3"]/div/div[1]/div/div[2]/div[2]/div/div[5]/div[1]/div/div/div[3]/div[12]/div[2]/text()');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});
}

scrapeProduct('https://us.shein.com/Young-Girl-Slogan-Graphic-Sweatshirt-p-20783414-cat-2115.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dcat%60hz%3DhotZone_8%60ps%3D4_4%60jc%3Dreal_2031&src_module=Women&src_tab_page_id=page_home1697916712057&mallCode=1&imgRatio=3-4');