const eventClickContainers = document.querySelectorAll('.eventClick');

eventClickContainers.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        if(e.target.dataset.select) {
           e.target.closest('.eventClick').querySelector('select').value = e.target.dataset.select;
        }
    })
})

