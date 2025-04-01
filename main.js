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
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClassButtonSelected()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected.style.backgroundColor = ""
        buttonSelected = null
    }
}
