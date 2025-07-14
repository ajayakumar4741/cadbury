const rege = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const regp = /^[a-z0-9]{6,12}$/;
function reg_email(){
    let em = document.querySelector('#reg-email').value
    if(!rege.test(em)){
        document.querySelector('#reg_span-email').innerHTML = 'Enter valid id'
        document.querySelector('#reg_span-email').style.color = 'red'
    }else{
        document.querySelector('#reg_span-email').innerHTML = 'good'
        document.querySelector('#reg_span-email').style.color = 'green'
    }
}

function reg_password(){
    let ps = document.querySelector('#reg-password').value
     
    if(!regp.test(ps)){
        document.querySelector('#reg_span-password').innerHTML = 'Password not strong'
        document.querySelector('#reg_span-password').style.color = 'red'
    }else{
        document.querySelector('#reg_span-password').style.color = 'green'
        document.querySelector('#reg_span-password').innerHTML = 'good'
    }
}

function regrep_password(){
    let rps = document.querySelector('#regrep-password').value
     
    if(ps!==rps){
        document.querySelector('#span-regrep_password').innerHTML = 'Password not matching'
        document.querySelector('#span-regrep_password').style.color = 'red'
    }else{
        document.querySelector('#span-regrep_password').innerHTML = 'matching'
        document.querySelector('#span-regrep_password').style.color = 'green'
    }
}

function regbutt(e){
    e.preventDefault()
    let rps = document.querySelector('#regrep-password').value
    let em = document.querySelector('#reg-email').value
    let ps = document.querySelector('#reg-password').value
    const result = document.querySelector('#result')
    if(rege.test(em) && regp.test(ps) && ps === rps){
        result.textContent = 'Registered successfully'
        result.style.color = 'green'
    }else{
        result.textContent = 'Registered Unsuccessfully'
        result.style.color = 'red'
    }
}

document.querySelector('form').addEventListener('submit',regbutt)
document.querySelector('#reg-password').addEventListener('change',reg_password)
document.querySelector('#regrep-password').addEventListener('change',regrep_password)
document.querySelector('#reg-email').addEventListener('change',reg_email)