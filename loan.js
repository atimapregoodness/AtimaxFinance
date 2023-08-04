const submitLoanBtn = document.querySelector('.submitBtn')
const inputH1 = document.querySelector('#inputH1')
const selectOptions = document.querySelector('.selectOptions')
const downArrow = document.querySelector('#downArrow')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const loanAmount = document.querySelector('#loanAmount')
const incomeText = document.querySelector('#incomeText')
const status = document.querySelector("#employmentStatus")
const income = document.querySelector('#monthlyIncome')

downArrow.addEventListener('click', () => {
      selectOptions.classList.toggle('active')
      inputH1.textContent = 'Employment status';
      incomeText.value = 'your monthly income';
      loanAmount.textContent = 0
      status.textContent = "Null";
      income.textContent = "Null";
})

const click = (optionName) =>{
      optionName.addEventListener('click', () => {
            inputH1.textContent = optionName.textContent;
            selectOptions.classList.remove('active') 
      })
      

      submitLoanBtn.addEventListener('click', () => {
            const incomeValue = parseInt(incomeText.value)
            amount = incomeValue * 0.02 / 2000
            loanAmount.textContent = incomeValue * amount;

            status.textContent = inputH1.textContent;
            income.textContent = incomeValue;

            setTimeout(() => {
                  incomeText.value = 'your monthly income';
                  inputH1.textContent = 'Employment status';
            }, 1000)
      })
}

click(option1)
click(option2)
click(option3)