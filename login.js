// document.addEventListener('DOMContentLoaded', function(){  })
// document.getElementById("form").addEventListener("submit", function (event) {
//     event.preventDefault()
//     // console.log("hello");
//     let emailFild = document.getElementById('user-email');
//     // const email = emailFild.value;
//     console.log(emailFild.value);

//     let passwordFild = document.getElementById('user-password');
//     // let password = passwordFild.value;
//     console.log(passwordFild.value);

// });


document.getElementById('btn-submit').addEventListener('click', function () {

    // console.log("hello");
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    console.log(email);

    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    console.log(password);

    if (email == "nftushar5200@gmail.com" && password == "1234") {
        window.location.href = "bank.html";
    } else {
        alert("LoL")
    }

})



