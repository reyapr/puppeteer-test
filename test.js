const puppeteer = require('puppeteer')

async function test(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
    // await page.goto('https://www.hijup.com')
 
    await page.goto('http://m.hijup.com:8000')
    await page.setViewport({
        width:1366, 
        height:768
    })
  
    setTimeout(async function(){
        let url = await page.url()
        console.log(url)
        await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
        
        setTimeout(async function(){
            await page.click('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > div:nth-child(1) > a')
            let signInUrl = await page.url()
            console.log(signInUrl)
            if(signInUrl=='http://m.hijup.com:8000/en/sign_in'){
                await page.waitForSelector('#app > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > div > input')
                await page.click('#app > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(1) > div > input')
                await page.keyboard.type('reyapr@gmail.com');
                await page.click('#app > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(4) > form > fieldset > div:nth-child(2) > div > input')
                await page.keyboard.type('hacktiv8');
                await page.keyboard.press('Enter')
        
                await page.waitForSelector('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(1) > div > div:nth-child(3) > div > div > a')
                await page.click('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(1) > div > div:nth-child(3) > div > div > a')
                
                await page.waitForSelector('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(1) > div > div:nth-child(3) > div > div > a')
                await page.click('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(1) > div > div:nth-child(3) > div > div > a')
                console.log('whislist')
                setTimeout(async function(){
                    // await page.click('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(2) > div > a')
                    await page.click('#shopping-now-button')
                    await clickProduct(page)
                },4000)
            }
        },2000)
       
    },2000)
}

async function buy(page){
    await page.click('#buy-now-button')
    
    // setTimeout(async function(){
    //     await page.click('body > div:nth-child(101) > div > div.jss614.jss632.jss778.jss775.jss773.jss782 > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > button')
    // },2000)
    await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span')
    let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span'))
    console.log(totalCart)

    if(totalCart) await goToCart(page)
}

function clickProduct(page){
    setTimeout(async function(){
        await page.click('#app > div > div:nth-child(3) > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
        await clickSize(page)
    },4000)
}

function clickSize(page){
    setTimeout(async function(){
        // page.click('#app > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(2) > div > div.jss22.jss64.jss77.jss90 > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1) > button')
        await page.click('#app > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(2) > div > div.MuiGrid-typeItem-351.MuiGrid-grid-sm-5-393.MuiGrid-grid-md-5-406.MuiGrid-grid-lg-5-419 > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > button')
        await buy(page)
    },4000)
}

function goToCart(page){
    setTimeout(async function(){
        await page.click('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a')
        await payTheProduct(page)
    },1000)
}

function payTheProduct(page){
    setTimeout(async function(){
        // await page.click('#app > div > div:nth-child(3) > div > div > div > div.jss926 > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.jss899.jss903.jss900.jss897 > div > div:nth-child(2) > button')
        await page.click('#continue-to-payment')
        await alamatPengiriman(page)
    },5000)
}

function alamatPengiriman(page){
    setTimeout(async function(){
        await page.click('#phone-shipping')
        await page.keyboard.type('085723087803')
        
        await page.click("label[for='province-shipping']")
        await page.click("label[for='province-shipping']")
    
        // Kota/kab
        await setTimeout(async function(){
            await page.click("label[for='city-shipping']")
            await page.click("label[for='city-shipping']")
        },2000)
        //Kec
        await setTimeout(async function(){
            await page.click("label[for='district-shipping']")
            await page.click("label[for='district-shipping']")
        },3000)
        //Alamat
        await setTimeout(async function(){
            await page.click('#text-area-shipping')
            await page.keyboard.type('Jl. Ra Kosasih, Ngaweng Gg H. Maksudi RT 03 RW 18 No. 75')
        },4000)

        await setTimeout(async function(){
            await page.click('#select-shipping')
            await setTimeout(async function(){
                await page.click('#radio-shipping')
            },1500)
            await setTimeout(async function(){
                await page.click('#continue-to-payment-shipping')
                await page.waitForNavigation()
                await paymentMethods(page)
            },2500)
        },6000)
    },3000)
}

async function paymentMethods(page){
    console.log(await page.url())

    setTimeout(async function(){
        await page.click('#bank_transfer')
        await page.waitForSelector('#continue-payment')
        await page.click('#continue-payment')
        await page.waitForNavigation()
        await page.waitForSelector('#confirmation-payment-button')
        await page.click('#confirmation-payment-button')
        await page.waitForSelector("label[for='bankReceived-confirmation']")
        await page.click("label[for='bankReceived-confirmation']")
        await page.click("label[for='bankReceived-confirmation']")
        setTimeout(async function(){
            await page.click('#confirmation-payment-now')
        },1000)
        // await confirmationPayment(page)
    },4000)
}

async function confirmationPayment(page){
   
}




test()
