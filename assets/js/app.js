const contactClick = ()=>{
    let reachOutButton = document.querySelector('#reach-out-btn');

    reachOutButton.addEventListener('click',()=>{
        let targetId = "contact-us"; 
        let targetItem = document.querySelector(`#${targetId}`);
        window.scrollTo(0, targetItem.offsetTop);
    });
}

const formListeners=()=>{
    let numberValid; let emailValid; let nameValid;
    const nameInput = document.querySelector('#o-contact-name');
    const numberInput = document.querySelector('#o-contact-phone');
    const mailInput = document.querySelector('#o-contact-email');
    const submitBtnWrapper = document.querySelector('#o-contact-submit');

    submitBtnWrapper.addEventListener('click',()=>{
        if(nameInput.value.length<2) nameInput.parentElement.classList.add('o-input-invalid');
        if(!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(numberInput.value) || !numberInput.value.length==10) numberInput.parentElement.classList.add('o-input-invalid');
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput.value)) mailInput.parentElement.classList.add('o-input-invalid');
    });

    nameInput.addEventListener('blur',e=>{
        if(typeof(e.target.value)=="string"&&e.target.value.length>2){
            nameValid=true;
            nameInput.parentElement.classList.remove('o-input-invalid');
            if(numberValid&&emailValid&&nameValid){
                submitBtnWrapper.classList.remove('o-disable-btn');
                submitBtnWrapper.setAttribute('type', 'submit');
            }
        }
        else{
            nameValid=false;
            nameInput.parentElement.classList.add('o-input-invalid');
            submitBtnWrapper.classList.add('o-disable-btn');
        }
    });

    numberInput.addEventListener('blur',e=>{
        if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e.target.value)&&e.target.value.length==10){
            numberValid=true;
            numberInput.parentElement.classList.remove('o-input-invalid');
            if(numberValid&&emailValid&&nameValid){
                submitBtnWrapper.classList.remove('o-disable-btn');
                submitBtnWrapper.setAttribute('type', 'submit');
            }
        }
        else{
            numberValid=false;
            numberInput.parentElement.classList.add('o-input-invalid');
            submitBtnWrapper.classList.add('o-disable-btn');
        }
    });

    mailInput.addEventListener('blur', e=>{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.target.value)){
            emailValid=true;
            mailInput.parentElement.classList.remove('o-input-invalid');
            if(numberValid&&emailValid&&nameValid) {
                submitBtnWrapper.classList.remove('o-disable-btn');
                submitBtnWrapper.setAttribute('type', 'submit');
            }
        }
        else{
            emailValid=false;
            mailInput.parentElement.classList.add('o-input-invalid');
            submitBtnWrapper.classList.add('o-disable-btn');
        }
    });

    nameInput.addEventListener('focus', ()=>nameInput.parentElement.classList.remove('o-input-invalid'));
    numberInput.addEventListener('focus', ()=>numberInput.parentElement.classList.remove('o-input-invalid'))
    mailInput.addEventListener('focus', ()=>mailInput.parentElement.classList.remove('o-input-invalid'))
}

function startApp() {
    contactClick();
    formListeners();
}

window.addEventListener("load", startApp);