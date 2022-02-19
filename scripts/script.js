const depositeBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');


depositeBtn.addEventListener('click',function(event){
    event.preventDefault();
    let depositeBox = document.getElementById('deposit-box');
    let avalableBalance = parseFloat(balanceField.innerText);
    let inputAmount = parseFloat (depositeBox.value)
    if(isNaN(inputAmount) || inputAmount < 0 ){
        depositeBox.value = '';
        alert('PLease Input Valid Amount')
    }
    balanceField.innerText = avalableBalance + inputAmount ;
    depositeBox.value = '';

})