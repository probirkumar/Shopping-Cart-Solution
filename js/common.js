// console.log('connection check to html')
// phone number price connection
// function updatePhoneNumber(isIncrease){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNUmber;

//     if(isIncrease === true){
//         newPhoneNUmber = previousPhoneNumber + 1;
//     }
//     else{
//         newPhoneNUmber = previousPhoneNumber - 1;
//     };

//     phoneNumberField.value = newPhoneNUmber;
//     return newPhoneNUmber;

// };

// case number price connection

// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);

//     let newCaseNumber;

//     if(isIncrease){
//         newCaseNumber = previousCaseNumber +1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber -1;
//     };

//     caseNumberField.value = newCaseNumber;
//     return newCaseNumber;
// }
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // console.log(currentSubTotal)

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
    
}
