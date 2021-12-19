document.getElementById("signBtn").addEventListener("click", getInputValue);


function getInputValue(){
    // Selecting the input element and get its value 
    inputVal = document.querySelector('.input').value;
    // Displaying the value
    const email = document.getElementById("emailTxt").value;
    const userName = document.getElementById("usernameTxt").value;
    const password = document.getElementById("passwordTxt").value;
    console.log(inputVal);
}
