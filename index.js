let meterToFeet = 3.281
let literToGallon = 0.264
let kilogramToPound = 2.204

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
   let baseValue = inputEl.value
   if (baseValue > 0){
    lengthEl.textContent = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)}`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue*literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue*kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/kilogramToPound).toFixed(3)} kilos`
   } 
})

