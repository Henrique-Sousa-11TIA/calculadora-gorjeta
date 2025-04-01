let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    removeClassButtonSelected()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
    removeClassButtonSelected()

    calculateResults()
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    if(document.querySelector("#custom-tip").value !== ""){
        document.querySelector("#custom-tip").value = ""
    }

    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected.style.backgroundColor = ""
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    buttonSelected.style.backgroundColor = "var(--topaz)"

    calculateResults()
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClassButtonSelected()
    calculateResults()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected.style.backgroundColor = ""
        buttonSelected = null
    }
}


function calculateResults (){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let strongAmount = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPercentage / numberOfPeople
        strongAmount.innerHTML = `$${tipAmountPerson.toFixed(2)}`

        let strongTotal = document.querySelector(".total strong")
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson 
        strongTotal.innerHTML = `$${totalPerson.toFixed(2)}`
    }
    
}