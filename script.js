const alerT = document.getElementById("alert");
function handleSubmit(e){
    e.preventDefault();
    const cPassword = document.getElementById("cpass").value;
    const password = document.getElementById("pass").value;
    if(password !== cPassword){
        alerT.innerText = "Password does not match";
    }
    else if(password.length <= 8){
        alerT.innerText = "Password must be 8 characters long";
    }
    else{
        alerT.style.color = "green";
        alerT.innerText = "Registration successful!"
    }
}
