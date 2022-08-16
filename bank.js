document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField= document.getElementById('deposit-field');
    const newDepositeValue= depositField.value ;
    // console.log(depositeValue)

    const depositAmount= document.getElementById('deposit-amount');
    const previousDepositInner= depositAmount.innerText;
const depositTotalResult= parseFloat(newDepositeValue)+parseFloat(previousDepositInner);

    depositAmount.innerText=depositTotalResult;
// balance part 
const balanceAmount= document.getElementById('balance-amount');
const balanceAmountInner =balanceAmount.innerText;
const balanceTotal=parseFloat(newDepositeValue)+parseFloat(balanceAmountInner);
balanceAmount.innerText=balanceTotal;
    depositField.value='';
})

// withdraw part 

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField= document.getElementById('withdraw-field');
    const withdrawValue = withdrawField.value ;
    // console.log(withdrawValue)

    const withdrawAmount=document.getElementById('withdraw-amount');
    const withdrawAmountInner= withdrawAmount.innerText;
const withdrawTotal= parseFloat(withdrawValue)+parseFloat(withdrawAmountInner);

    withdrawAmount.innerText=withdrawTotal;
const balanceFiled= document.getElementById('balance-amount');
const balanceFiledInner= balanceFiled.innerText;
const totalBalance = parseFloat(balanceFiledInner)-parseFloat(withdrawValue);
balanceFiled.innerText=totalBalance;


    withdrawField.value='';

    
})