const billInput = document.getElementById('bill');
const tipSelect = document.querySelectorAll('.tip');
const tipSelectCustom = document.getElementById('tip-input');
const peopleInput = document.getElementById('people');
const inputAlert = document.getElementById('input-alert')
const tipTotal = document.querySelector('#tip-total');
const billTotal = document.querySelector('#bill-total');
const resetBtn = document.getElementById('reset-btn')

let billInputValue, tipSelectValue, peopleInputValue;
let tipValue, billValue;

// take the value of buttons select
for(let i=0; i<tipSelect.length; i++){
  tipSelect[i].addEventListener('click', function(event){
    tipSelectValue = +tipSelect[i].value;

    // remove class from all buttons
  for(let j=0; j<5; j++){
    !tipSelect[j].classList.remove('tip-click')
  }
    event.target.classList.add('tip-click')
  })

}


// take the value of custom input
tipSelectCustom.addEventListener('input', function(){
  tipSelectValue = +tipSelectCustom.value
})

// calculate all the value and showing the result
peopleInput.addEventListener('input', function(){

  //show outline
  inputAlert.className = 'alert';

  billInputValue = +billInput.value
  peopleInputValue = +peopleInput.value

  // Default people divide
  if(peopleInputValue < 1){
    peopleInputValue = 1
  }

  // result rules
  tipValue = billInputValue * (tipSelectValue/100)
  console.log(tipValue)
  billValue = (billInputValue + tipValue) / peopleInputValue
  
  // escape the NaN on the inner HTML
  if (isNaN(billValue) || isNaN(tipValue)){
    tipTotal.innerHTML = (`$0.00`)
    billTotal.innerHTML = (`$0.00`)
  } else{
    tipTotal.innerHTML = (`$ ${Math.ceil(tipValue / peopleInputValue)}`)
    billTotal.innerHTML = (`$ ${Math.ceil(billValue)}`)
  }
  
})

resetBtn.addEventListener('click', function(e){
  billInput.value = '';
  tipSelect.value = '';
  tipSelectCustom.value = ''
  peopleInput.value = '';

  //result = 0
  tipTotal.innerHTML = (`$0.00`)
  billTotal.innerHTML = (`$0.00`)
  for(let j=0; j<5; j++){
    !tipSelect[j].classList.remove('tip-click')
  }
  e.preventDefault()
})
