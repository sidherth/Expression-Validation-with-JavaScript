let email = document.querySelector("#Email");
let phonenum = document.querySelector("#Phone-number");
let postal = document.querySelector("#Postal-Code");


email.addEventListener("click", mail);

function mail() {
    console.log("your Mail");
    let x = prompt("Enter Your Mail");
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (re.exec(x)) {
        alert("Your Mail is valid");
        console.log("Your mail is Valid");
        console.log(re.test(x))
    } else {
        console.log("Invalid Email");
        alert("Invalid Email");
    }


}



phonenum.addEventListener("click", phone);

function phone() {

    console.log("Your Number");
    let x = prompt("Enter Your PhoneNumber");
    let re = /^(\+)?(88)?01[0-9]{9}$/;

    if (re.exec(x)) {
        alert("Your Number is valid");
        console.log("Your Number is Valid");
        console.log(re.test(x))
    } else {
        console.log("Invalid Number");
        alert("Invalid Number");
        console.log(re.test(x))
    }

}


postal.addEventListener("click", code);

function code() {

    console.log(" Your Postalcode");
    let x = prompt("Enter your Postalcode");
    let re = /^[0-9]{4}/;
    if (re.exec(x)) {
        alert("Your Postal Code is Vaild");
        console.log("Your Postal Code is Valid");
        console.log(re.test(x));


    } else {
        console.log("Invalid Postal Code");
        alert("Invalid postalcode");
        console.log(re.test(x));
    }
}