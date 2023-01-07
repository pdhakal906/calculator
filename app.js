const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []

function calculate(button){
    const value = button.textContent
    if (value === 'CLEAR'){
        calculation = []
        screenDisplay.textContent = "."
    } else if (value === '='){
        screenDisplay.textContent = eval(calculationNoComma)
    } else{
        calculation.push(value)
        // console.log(calculation)
        // screenDispaly.textContent = calculation displays clicked button's value separated by comma
        calculationNoComma = calculation.join('')
        screenDisplay.textContent = calculationNoComma
    }
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button) ))