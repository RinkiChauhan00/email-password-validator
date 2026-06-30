let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let emailerr = document.querySelector(".emailerror");
let passworderr = document.querySelector(".passworderror");
let result = document.querySelector(".resultmessage");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    
    emailerr.textContent=""
    passworderr.textContent="";
   
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        emailerr.textContent = "Email is incorrect"
        emailerr.classList.add("emailerror");
        result.textContent="";
    }
    if(!passwordans){
        passworderr.textContent = "Password is incorrect";
        passworderr.classList.add("passworderror");
        result.textContent="";
    }
    if(emailans && passwordans){
    result.textContent="Everything is correct";
    result.classList.add("resultmessage");
    }
})
