document.getElementById('btn-withdraw').addEventListener('click', function () {

// console.log("hello");


    const withdrawFiled = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawFiled.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    // console.log(typeof newwithdrawAmount)

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalString = withdrawTotalElement.innerText;
    // console.log(typeof PreviouswithdrawTotal)
    const PreviouswithdrawTotal = parseFloat(PreviousWithdrawTotalString);

    const currentwithdrawTotal = PreviouswithdrawTotal + newwithdrawAmount;


    withdrawTotalElement.innerText = currentwithdrawTotal;


    const totalBalance = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalance.innerText;
    const PreviousTotalBalance = parseFloat(previousBalanceTotalString);
    // const newTotalBalance =
    // console.log(typeof TotalBalance);  
    const currentBalanceTotal = PreviousTotalBalance - newwithdrawAmount;

    totalBalance.innerText = currentBalanceTotal;


})