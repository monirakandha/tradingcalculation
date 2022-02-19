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
    if(inputAmount > 0 ){
        balanceField.innerText = inputAmount + avalableAmmount;
    }

});
// update tading amount 

function updatePortfolio(iteamsId){
    let avalableCoinBalance = parseFloat(balanceField.innerText);
    let coinAmount = getInputValue(iteamsId);
    if (coinAmount  > 0){
        let totoalExpense
        if(iteamsId == 'btc-box'){
            totoalExpense = 10* coinAmount;
            if(totoalExpense > avalableCoinBalance){
                return alert ('Not Enoghu money')
            }
            btcField.innerText = coinAmount;
        }
        else if(iteamsId == 'eth-box'){
                totoalExpense = 5* coinAmount;
            if(totoalExpense > avalableCoinBalance){
                return aleart ("Not enoghu ammount")
            }
            ethField.innerText = coinAmount;
            }
        
        balanceField.innerText = avalableCoinBalance - totoalExpense
    }

}

buyBtc.addEventListener('click',function(){
    updatePortfolio('btc-box');
});
buyEth.addEventListener('click',function(){
    updatePortfolio('eth-box');
})