const eventClickContainers = document.querySelectorAll('.eventClick');
const heightSelect = document.querySelector('#height');
const fabricContainner = document.querySelector('#fabricContainner');
const stepQty = 5;
let currentStep = 1;
const info = document.querySelector('.info');
const allOptions = document.querySelectorAll('option');
const prevBtn = document.querySelector('#prevStep');


heightSelect.addEventListener('change', ()=> [
    alert('Changed', allOptions)
])

function getAllSelectedOptions() {
    const selectedOptions = [];
  
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(selectElement => {
      const options = selectElement && selectElement.options;
  
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.selected && option.value !== "") {
          selectedOptions.push(option.value);
        }
      }
    });
  
    const infoElement = document.querySelector('.info');
    infoElement.textContent = selectedOptions.join(', ');

    return selectedOptions;
  }

console.log('Start:', currentStep)

function hideShow(step) {
    document.querySelector(`[data-step="${Number(step)}"]`).classList.add('hide');
    document.querySelector(`[data-step="${Number(step)+1}"]`).classList.remove('hide');
    currentStep ++;
    console.log(currentStep)
}

function prevStep(){
    console.log('H:', currentStep)
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('hide');
    document.querySelector(`[data-step="${currentStep-1}"]`).classList.remove('hide');
    // document.querySelector(`[data-step="${currentStep}"]`).querySelector('select').value == '';
    console.log(document.querySelector(`[data-step="${currentStep}"]`).querySelector('select').value)
    getAllSelectedOptions();
    currentStep--;

    // if(currentStep === 1) {
    //     document.querySelector(`[data-step="${currentStep}"]`).classList.add('hide');
    // } else {
    //     document.querySelector(`[data-step="${currentStep-1}"]`).classList.remove('hide');
    // }
    
}

function allSelectedOpions(){
    document.querySelectorAll('option[checked]')
}

prevBtn.addEventListener('click', ()=>{
    prevStep()
})

eventClickContainers.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        if(e.target.dataset.select) {
           e.target.closest('.eventClick').querySelector('select').value = e.target.dataset.select;
           if(e.target.closest('.eventClick').dataset.step) {
            hideShow(e.target.closest('.eventClick').dataset.step)
            getAllSelectedOptions()
           }

        }
    })
})



