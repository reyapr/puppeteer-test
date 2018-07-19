const puppeteer = require('puppeteer')

async function test(){
    const browser = await puppeteer.launch({
        headless: false,
      });
   
    const page = await browser.newPage();
    // await page.goto('https://www.hijup.com')
    await page.setViewport({
        width:1366, 
        height:768
    })
    await page.goto('http://m.hijup.com:8000',{
        waitUntil:'networkidle2'
    })
    
  
		let url = await page.url()
		console.log(url)
		await page.waitForSelector('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > div:nth-child(1) > a')
		await page.click('#app > div > div:nth-child(3) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > div:nth-child(1) > a')
		let signInUrl = await page.url()
		console.log(signInUrl)
		if(signInUrl=='http://m.hijup.com:8000/en/sign_in'){
			await page.waitForSelector("input[type='email']")
      await page.click("input[type='email']")
			await page.keyboard.type('reyapr@gmail.com');
			await page.click("input[type='password']")
			await page.keyboard.type('hacktiv8');
			await page.keyboard.press('Enter')

			await page.waitForSelector("a[title='See your wishlist']")
			await page.click("a[title='See your wishlist']")

			console.log('whislist')
			await page.waitForSelector('#shopping-now-button')
			await page.click('#shopping-now-button')

			//click first Product
			await page.waitForSelector('#app > div > div:nth-child(3) > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
			await page.click('#app > div > div:nth-child(3) > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > div:nth-child(1) > a')
			
			//in detail Product Page
			await page.click('#buy-now-button')
	
			await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span')
			let totalCart = await page.evaluate(el=> el.innerHTML, await page.$('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a > span > span'))
		
			//Go to cart page
			await page.waitForSelector('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a')
			await page.click('#app > div > div:nth-child(2) > header > div > div.header-primary > div > div.shrink.column.user-menu > div > div:nth-child(2) > div > a')

			await payTheProduct(page)
		}
       
}

async function buy(page){

}


function goToCart(page){
    setTimeout(async function(){
			await payTheProduct(page)
    },1000)
}

function payTheProduct(page){
    setTimeout(async function(){
			await page.click('#continue-to-payment')
			await alamatPengiriman(page)
    },5000)
}

function alamatPengiriman(page){
	setTimeout(async function(){
		await page.waitForSelector('#phone-shipping')
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
		},5000)

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
		},8000)
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
			},2000)
    },4000)
}

async function confirmationPayment(page){
   
}




test()
