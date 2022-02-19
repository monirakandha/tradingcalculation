const depositeBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');


// function for get valye form input box
function getInputValue(boxId){
    let inputBox = document.getElementById(boxId);
    let inputBoxAmount = parseFloat(inputBox.value);
    if(isNaN(inputBoxAmount) || inputBoxAmount < 0 ){
        inputBox.value = '';
        alert('PLease Input Valid Amount')
    }
    inputBox.value = '';
    return inputBoxAmount;
}
depositeBtn.addEventListener('click',function(event){
    event.preventDefault();
    let avalableAmmount = parseFloat(balanceField.innerText);
    let inputAmount = getInputValue('deposit-box');
    balanceField.innerText = inputAmount + avalableAmmount;


})