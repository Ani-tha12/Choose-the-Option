// function validationform()
// {
//     const Firstnamename = document.getElementById("fname").values;
//     const lname = document.getElementById("Lname").values;
//     const Address = document.getElementById("Address").values;
//     const email = document.getElementById("email").values;
//     const password = document.getElementById("password").values;
//     const select = ocument.getElementById("select").values;
     
//     const AddressError = documnet.getElementById("Address-error");
//     const emailError = documnet.getElementById("emailerror");
//     const passwordError = documnet.getElementById("password-error");
//     const selectError = documnet.getElementById("select-error");

//     fError.textContent ="";
//     lnameError.textContent ="";
//     AddressError.textContent ="";
//     emailError.textContent ="";
//     PasswordError.textContent ="";
//     selectError.textContent ="";

//     let isValid = true;
//     if(fname===" " || /\d/.test(fname))
//     {
//         nameError.textContent="please enter your nameproperly.";
//         isValid=false;
//     }
//     if(lname===" " || /\d/.test(lname))
//         {
//             nameError.textContent="please enter your nameproperly.";
//             isValid=false;
//         }
//     if(Address===" ")
//         {
//             AddressError.textContent="please enter your address properly.";
//             isValid=false;
//         }
//         if(email===" " || !email.includes("@"))
//             {
//                 emailError.textContent="please enter your email properly.";
//                 isValid=false;
//             }
//             if(select===" ")
//                 {
//                     selectError.textContent="please enter your course properly.";
//                     isValid=false;
//                 }

//                 if(!agree===" ")
//                     {
//                         agreeError.textContent="please agree above info properly.";
//                         isValid=false;
//                     }
//                  return isValid;
// }
// 
// function height()
// {
//     var height=123.56;
//     var type=(height>=190)?"tall":"short";
//     return type;
// }
// let arr=['a'.'b','c'];
// arr[10]='z';
// console.log(arr.length);
// let x;
// let y =  x ??10;
// console.log(y);
// var x = 10;
// var y = "10";

// console.log(x===y);
function checkAnswer(element, option) {
    const correctAnswer = 'D';
    if (option === correctAnswer) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
    });
}
