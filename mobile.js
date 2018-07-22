const puppeteer = require('puppeteer')

menu  = async () => {
  let browser = await puppeteer.launch({
    headless:false
  })

  let page = await browser.newPage()

  await page.setViewport({
    width:376, 
    height:617
  })
  await page.goto('http://m.hijup.com:8000/en/')
  await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
  await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
  
  await page.waitFor(1000)
  await page.waitForSelector("a[title='Sign In to your account']")
  let signIn = await page.evaluate(el => el.innerHTML, await page.$("a[title='Sign In to your account']"))
  console.log(signIn)
  await page.click("a[title='Sign In to your account']")

  await page.waitForSelector("input[type='email']")
  await page.click("input[type='email']")
  await page.keyboard.type('automated_test@gmail.com');
  await page.click("input[type='password']")
  await page.keyboard.type('hacktiv8');
  await page.keyboard.press('Enter')

  await page.waitFor(1000)
  await page.waitForSelector("div[class='s-alert-wrapper']")
  let succesLoginAlert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-wrapper']"))
  console.log(succesLoginAlert,'Sign in success')

  //click menu to product
  await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
  await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(1) > button')
  await page.waitFor(1000)
  await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(1) > div > nav > ul:nth-child(7) > li > a')
  await page.click('#app > div > div:nth-child(3) > div:nth-child(1) > div > nav > ul:nth-child(7) > li > a')
  await page.waitFor(1000)
  await page.waitForSelector("a[title='See our popular collections']")
  await page.click("a[title='See our popular collections']")

  //click the product
  await page.waitFor(1000)
  let urlProduct = await page.url()
  console.log(urlProduct)
  await page.waitForSelector('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-660 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
  await page.click('#app > div > div:nth-child(3) > div:nth-child(3) > div > div > div > div.Page-root-660 > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')

  //click size
  await page.waitFor(1000)
  await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div:nth-child(4) > div > div.MuiGrid-typeItem-22 > div > div:nth-child(1) > div > div:nth-child(2) > div > div > button')
  await page.click('#app > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div:nth-child(4) > div > div.MuiGrid-typeItem-22 > div > div:nth-child(1) > div > div:nth-child(2) > div > div > button')

  //click the buy button
  await page.waitFor(1000)
  await page.waitForSelector('#buy-now-button')
  await page.click('#buy-now-button')

  //wait for pop-up cart & click the cart
  await page.waitFor(1000)
  let cartUrl = await page.url()
  await page.waitForSelector('#app > div > div:nth-child(2) > div:nth-child(3) > header > div > div:nth-child(2) > div > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span > span')
  await page.click("a[title='See your shopping bag']")

  //click amount
  await page.waitFor(1000)
  await page.waitForSelector("#continue-to-payment")
  await page.click("#continue-to-payment")

  //fill shipping address
  await page.waitForSelector('#text-area-shipping')
  await page.click('#text-area-shipping')
  await page.keyboard.type('Jl. Jalan, Haha Gg Haha.RT ha RW ha No. haha')

  //test5phone
  await page.waitForSelector("label[for='province-shipping']")
  await page.click("label[for='province-shipping']")
  await page.click("label[for='province-shipping']")
  await page.waitFor(2000)
  await page.waitForSelector("label[for='city-shipping']")
  await page.click("label[for='city-shipping']")
  await page.click("label[for='city-shipping']")
  await page.waitFor(2000)
  await page.click("label[for='district-shipping']")
  await page.click("label[for='district-shipping']")
  await page.waitFor(2000)
  await page.waitForSelector('#phone-shipping')
  await page.click('#phone-shipping')
  await page.keyboard.type('088088088088')
  let phoneNum = await page.$('#phone-shipping')
  let getPhoneNum = await page.evaluate(el=> el.getAttribute('value'),phoneNum)
  await page.waitFor(2000)
  await page.waitForSelector('#select-shipping')
  await page.click('#select-shipping')
  await page.waitFor(1000)
  // await page.click('#radio-shipping')
  await page.click('#radio-shipping')
  await page.waitFor(1500)
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')


  //nextPayment
  await page.waitFor(2000)
  await page.waitForSelector("input[value='cod']")
  await page.click("input[value='cod']")

  await page.waitFor(1000)
  await page.waitForSelector('#continue-payment')
  await page.click('#continue-payment')
}

menu()