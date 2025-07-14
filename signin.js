function email(s){
    s.preventDefault()
    let se = document.querySelector('.sign-mail').value
    const rege = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const result = document.querySelector('.result')
    if(!rege.test(se)){
        result.textContent = "Check format of email.....";
        result.style.color = "red";
        //document.querySelector("#signup-email").style.borderColor = "red";
    }else{
        result.textContent = "Logged successfully";
        result.style.color = "green";
    }
}

document.querySelector('.signin-form').addEventListener('submit',email)