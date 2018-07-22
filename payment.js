const puppeteer = require('puppeteer')

payment = async ()=>{
  let browser = await puppeteer.launch({
    headless:false
  })

  let page = await browser.newPage()

  await page.setViewport({
    width:1366, 
    height:768
  })
  await page.goto('http://m.hijup.com:8000/en/orders/show/714498/b975a19c5e958bef9e2c69c37f70f3ff4dc1e465',{
    waitUntil:'networkidle2'
  })

  await page.click('#contact-customer-support')
  let contactCustomerSupport = await page.evaluate(el=> el.innerHTML, await page.$('#contact-customer-support'))
  console.log(contactCustomerSupport,'haha')
  // 
  await page.waitFor(1000)
  await page.waitForSelector('#sfe-offline-name')
  await page.click('#sfe-offline-name')
  await page.keyboard.type('haha test haha')

  await page.waitForSelector('#sfe-widget__header-subtitle--container')
  let chatWithUs = await page.evaluate(el => el.innerHTML, await page.$('#sfe-widget__header-subtitle--container'))
  console.log(chatWithUs,'chat with us')
  await page.waitFor(2000)
  await page.waitForSelector("input[value='gopay']")
  await page.click("input[value='gopay']")
  await page.waitForSelector('#continue-payment')
  let payment = await page.evaluate(el=>el.innerHTML, await page.$('#continue-payment'))
  console.log(payment,'<!-- react-text: 583 -->Continue<!-- /react-text -->')

  await page.waitForSelector("input[value='cimb_clicks']")
  await page.click("input[value='cimb_clicks']")
  await page.waitForSelector('#continue-payment')
  let payment1 = await page.evaluate(el=>el.innerHTML, await page.$('#continue-payment'))
  console.log(payment1,'<!-- react-text: 583 -->Continue<!-- /react-text -->')

  
}


nextPayment = async () => {
  let browser = await puppeteer.launch({
    headless:false
  })

  let page = await browser.newPage()

  await page.setViewport({
    width:1366, 
    height:768
  })
  await page.goto('http://m.hijup.com:8000/en/orders/summary/714498/b975a19c5e958bef9e2c69c37f70f3ff4dc1e465',{
    waitUntil:'networkidle2'
  })

  await page.waitForSelector('#confirmation-payment-button')
  await page.click('#confirmation-payment-button')

  let confirmOrdersSelector = '#app > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-typeItem-427 > div > div.Surface-root-516 > div > div > p'
  await page.waitForSelector(confirmOrdersSelector)
  let confirmOrders = await page.evaluate(el => el.innerHTML, await page.$(confirmOrdersSelector))
  console.log(confirmOrders)
  await page.waitFor(1000)
  await page.waitForSelector('#confirmation-payment-now')
  await page.click('#confirmation-payment-now')

  await page.waitFor(1000)
  await page.waitForSelector("div[class='s-alert-wrapper']")
  await page.waitForSelector("div[class='s-alert-box-inner']")
  let alert = await page.evaluate(el => el.innerHTML, await page.$("div[class='s-alert-box-inner']"))
  console.log(alert,'Failed to confirm your order. Please ensure you have fill in bank account you transfered to')

  await page.waitFor(1000)
  await page.waitForSelector("label[for='bankReceived-confirmation']")
  await page.click("label[for='bankReceived-confirmation']")

  await page.waitForSelector("ul[role='listbox']")
  let listBank = await page.evaluate(el => el.innerHTML, await page.$("ul[role='listbox']"))
  console.log(listBank.includes('CIMB'))
  console.log(listBank.includes('CIMB Syariah'))
  console.log(listBank.includes('Mandiri'))
  console.log(listBank.includes('BCA'))
  await page.click("li[role='option']")

}
nextPayment()