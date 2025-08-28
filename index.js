/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const inputEl = document.getElementById("inputEl")


buttonEl.addEventListener("click", function(){
    let inputVal = inputEl.value
    lengthCalculation(inputVal)
    volumeCalculation(inputVal)
    massCalculation(inputVal)
})


function lengthCalculation(value){
    lengthEl.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`
}

function volumeCalculation(value){
    volumeEl.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`
}

function massCalculation(value){
    massEl.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`
}
