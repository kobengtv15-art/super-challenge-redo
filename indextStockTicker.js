import { getStockData } from './FakeTickerData.js'

// I need to automate this and get new stock info every 1.5 secs
setInterval( function() {
    const freshData = getStockData()
    renderStockData(freshData)
},1500)

let prevPrice = null

// This display part needs to be automated as well be putting into a funciton 
function renderStockData(freshData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    //deconstruct the freshData
    const { name, sym, price, time} = getStockData()

    const priceDirection = price > prevPrice ? 'greenarrow.svg': price < prevPrice ? 'redarrow.svg': 'arrowside.svg'
    const imgholder = document.createElement('img')
    imgholder.src = `../Super challenge/stock ticker project/img/${priceDirection}`
    imgholder.alt = 'Price direction'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(imgholder)

    stockDisplayName.textContent = `Name: ${name}`
    stockDisplaySymbol.textContent = `Symbol: ${sym}`
    stockDisplayPrice.textContent = `Price: ${price}`
    stockDisplayTime.textContent = `Time: ${time}`

    prevPrice = price
}
