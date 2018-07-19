const puppeteer = require('puppeteer')

async function emailNotValid(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
    // await page.goto('https://www.hijup.com')
 
    await page.goto('http://m.hijup.com:8000/en/sign_in')
    await page.setViewport({
        width:1366, 
        height:768
    })
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.type('asdasdada')
    await page.click("input[type='password']")
    await page.keyboard.type('asdasdada')
    await page.keyboard.press('Enter')
    await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > p')
    let emailNotValid = await page.evaluate(el => el.innerHTML, await page.$('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > p'))
    console.log(emailNotValid)
}

async function passNotValid(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
    // await page.goto('https://www.hijup.com')
 
    await page.goto('http://m.hijup.com:8000/en/sign_in')
    await page.setViewport({
        width:1366, 
        height:768
    })
    await page.waitForSelector("input[type='email']")
    await page.click("input[type='email']")
    await page.keyboard.type('reyapr@gmail.com')
    await page.click("input[type='password']")
    await page.keyboard.type('asdasdada')
    await page.keyboard.press('Enter')
    await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(2) > p')
    let incorretPass = await page.evaluate(el => el.innerHTML, await page.$('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(2) > p'))
    console.log(incorretPass)
}

async function alertWhislist(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
 
    await page.goto('http://m.hijup.com:8000/en/products',{
        waitUntil: 'networkidle2'
    })
    await page.waitForSelector("#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-170 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(5) > div > div > div:nth-child(1) > button > span.MuiIconButton-label-322")
    await page.click("#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-170 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(5) > div > div > div:nth-child(1) > button > span.MuiIconButton-label-322")
    await page.waitForSelector("div[class='s-alert-wrapper']")
    let loginAlert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-wrapper']"))
    console.log(loginAlert)
}

async function buyProduct(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
    await page.setViewport({
        width:1366, 
        height:768
    })
    await page.goto('http://m.hijup.com:8000/en/square-hijab/46361-rosa-satin-scarf',{
        waitUntil: 'networkidle2'
    })
  
    // await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-186 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
    // await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-186 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
   
    // await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-186 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
    // await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-186 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
   
    await page.waitForSelector('#buy-now-button')
    await page.click('#buy-now-button')

    // await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span > span')
    // let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span > span'))
    // console.log(totalCart)
    await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(3) > div > a > span > span')
    let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(3) > div > a > span > span'))
    console.log(totalCart)
}



alertWhislist()