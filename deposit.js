document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(typeof newDepositAmount)

    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    // console.log(typeof PreviousDepositTotal)
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;


    const totalBalance = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalance.innerText;
    const PreviousTotalBalance = parseFloat(previousBalanceTotalString);
    // const newTotalBalance =
    // console.log(typeof TotalBalance);  
    const currentBalanceTotal = PreviousTotalBalance + newDepositAmount;

    totalBalance.innerText = currentBalanceTotal;


})