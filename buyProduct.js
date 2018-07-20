const puppeteer = require('puppeteer')


buyProduct = async () => {
  let browser = await puppeteer.launch({
    headless:false
  })
 
  let page = await browser.newPage()
  await page.setViewport({
    width:1366, 
    height:768
  })
  await page.goto('http://m.hijup.com:8000/en/orders/new/93102910/52dbcb308abecd557d357eff34eccd9046541ca0',{
    waitUntil:'networkidle2'
  })
  let guestButton = "button[title='Checkout as guest']"
  let guest = await page.evaluate(el => el.getAttribute('title'), await page.$(guestButton))
  page.waitForSelector(guestButton)
  page.click(guestButton)
}

fillTheProduct = async () => {
  let browser = await puppeteer.launch({
    headless:false
  })
 
  let page = await browser.newPage()
  await page.setViewport({
    width:1366, 
    height:768
  })
  await page.goto('http://m.hijup.com:8000/en/shipping/93075119/942c77b0cb4e638ca0da39ce0bfc61bd0c7db4bc',{
    waitUntil:'networkidle2'
  })
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
  let errFill = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div:nth-child(1) > div:nth-child(1) > div > span'
  let errFillMsg = await page.evaluate(el=> el.innerHTML, await page.$(errFill))
  console.log(errFillMsg,'Please fill out name.')

  //test2
  let inputName = "input[placeholder='Name:']"
  await page.waitForSelector(inputName)
  await page.click(inputName)
  await page.keyboard.type('haha test haha')
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
  let errFill1 = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div:nth-child(1) > div:nth-child(2) > div > span'
  let errFillMsg1 = await page.evaluate(el => el.innerHTML, await page.$(errFill1))
  console.log(errFillMsg1,'Please fill out email.')

  //test3
  let inputEmail = "input[placeholder='Email']"
  await page.waitForSelector(inputEmail)
  await page.click(inputEmail)
  await page.keyboard.type('haha@haha.haha')
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
  let errFill2 = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(7) > div > div > span'
  let errFillMsg2 = await page.evaluate(el => el.innerHTML, await page.$(errFill2))
  console.log(errFillMsg2,'Please fill out address.')

  //test4
  await page.waitForSelector('#text-area-shipping')
  await page.click('#text-area-shipping')
  await page.keyboard.type('Jl. Jalan, Haha Gg Haha.RT ha RW ha No. haha')
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
  let errFill3 = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(3) > div > div > span'
  let errFillMsg3 = await page.evaluate(el => el.innerHTML, await page.$(errFill3))
  console.log(errFillMsg3,'Please fill out province.')
 

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
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
  let errFill4 = '#app > div > div:nth-child(3) > div > div > div > div.MuiGrid-typeContainer-21.MuiGrid-spacing-xs-16-43.MuiGrid-direction-xs-column-24.MuiGrid-wrap-xs-nowrap-27 > div:nth-child(2) > div > div:nth-child(1) > form > div > div:nth-child(1) > div > div.MuiPaper-root-128.MuiPaper-elevation2-132.MuiPaper-rounded-129.Surface-medium-126 > div > div.row > div > div:nth-child(1) > div > div > span'
  let errFillMsg4 = await page.evaluate(el => el.innerHTML, await page.$(errFill4))
  console.log(errFillMsg4,'Please fill out phone.')

  //test6continue to payment
  await page.waitFor(2000)
  await page.waitForSelector('#phone-shipping')
  await page.click('#phone-shipping')
  await page.keyboard.type('088088088088')
  let phoneNum = await page.$('#phone-shipping')
  let getPhoneNum = await page.evaluate(el=> el.getAttribute('value'),phoneNum)
  console.log(getPhoneNum)
  await page.waitFor(1000)
  await page.waitForSelector('#select-shipping')
  await page.waitFor(1000)
  await page.click('#select-shipping')
  await page.waitFor(1000)
  // await page.click('#radio-shipping')
  await page.click('#radio-shipping')
  await page.waitFor(1500)
  let formChooseShipping = await page.evaluate(el => el.value, await page.$('#select-shipping'))
  console.log(formChooseShipping,'Regular')
  await page.waitForSelector('#continue-to-payment-shipping')
  await page.click('#continue-to-payment-shipping')
}

fillTheProduct()