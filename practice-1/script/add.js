function showForm(){
    const open = document.querySelector('.open');
    const container = document.querySelector('.container');
    const close = document.querySelector('.close-btn');
    open.addEventListener('click', ()=>{
        container.classList.add('active');
    })
    close.addEventListener('click', ()=>{
        container.classList.remove('active');
    })
}
showForm();