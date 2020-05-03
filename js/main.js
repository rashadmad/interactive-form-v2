"use strict";
 
const originalCreditCardField = creditCardField.innerHTML;
const originalPaypalSectionField = paypalSectionField.innerHTML;
const originalBitcoinSectionField = bitcoinSectionField.innerHTML;
//I want to encapsulated these diffrent defaults being set
{
    //we need the user to focus on the first input field
    usersName.focus()
    otherJobInputFieldDisplay("none");
    manipulateThemeSelectFieldActive("none")
    hideColorSelectField()
    userPayment[0].style.display = "none"
    userPayment.value = "credit card"

    bitcoinSectionField.innerHTML = ""
    paypalSectionField.innerHTML = ""
}

const jobRoleChange = () => {
    if(jobRoleSelect.value === "other"){
        otherJobInputFieldDisplay("inline");
    } else {
        otherJobInputFieldDisplay("none");
    }
}

jobRoleSelect.addEventListener('change', jobRoleChange)

const tshirtDesignChange = () => {

    let JsPuns = 0;
    let HeartJs = 3;
    //we will need to remove the default option becasue it will no longer be able to be valid
    if (colorSelectField[0].textContent === "Please select a T-shirt theme") {
        colorSelectField.removeChild(colorSelectField[0])
    }
    if(isThemeSelectedEqualJsPuns()){
        colorSelectField.selectedIndex = 0;
        while (JsPuns < colorSelectField.length) {
            colorSelectField[JsPuns].style.display = "inline";
            JsPuns++;
        }
        while (HeartJs < colorSelectField.length) {
            colorSelectField[HeartJs].style.display = "none";
            HeartJs++;
        }
    }
    if(isThemeSelectedEqualHeartJs()){
        colorSelectField.selectedIndex = 3;
        while (JsPuns < colorSelectField.length) {
            colorSelectField[JsPuns].style.display = "none";
            JsPuns++;
        }
        while (HeartJs < colorSelectField.length) {
            colorSelectField[HeartJs].style.display = "inline";
            HeartJs++;
        }
    }
}

tshirtDesign.addEventListener('change', tshirtDesignChange);

//we need to disable a checkbox in cases that there are other events selected at that time
const disableCheckbox = (checkboxToDisable,recentlyCheckedBox) => {
    if(checkboxToDisable !== recentlyCheckedBox && recentlyCheckedBox.checked) {
        checkboxToDisable.disabled = true
        checkboxToDisable.parentNode.classList.add("disabled");
    } else {
        checkboxToDisable.disabled = false
        checkboxToDisable.parentNode.classList.remove("disabled");
    }
}

//i need to be able to take all of theactivities together and gather a sum
const totalCost = (a,b,c,d,e,f,g) => {
   let sum =+ a + b + c + d + e + f + g
   return sum;
}

//I want to have a general eventListener set up for all of the checkbox buttons
document.querySelectorAll("input[type=checkbox]").forEach(activity => {
 

    activity.addEventListener('click', event => {
        spanContainer.textContent = 0;
        const checkedCheckBox = event.target
        const checkboxDayAndTime = event.target.dataset.dayAndTime 
        labelList[13].parentNode.insertBefore(spanContainer, labelList[13]);
        spanContainer.textContent = 'your total is $' + totalCost(mainConfValue(),javaScriptFrameworksValue(),javaScriptLibrarieValue(),expressWorkshopInputValue(),nodeWorkshopInputValue(),buildToolsValue(),npmWorkshopValue());
        

        if (checkboxDayAndTime === "Tuesday 9am-12pm") {
            disableCheckbox(javaScriptFrameworksInput,checkedCheckBox);
            disableCheckbox(expressWorkshopInput,checkedCheckBox);
        } else if (checkboxDayAndTime === "Tuesday 1pm-4pm") {
            disableCheckbox(javaScriptLibrariesInput,checkedCheckBox);
            disableCheckbox(nodeWorkshopInput,checkedCheckBox);
        } 
        if(event.target.checked){
            checkBoxesChecked++;
        } else {
            checkBoxesChecked--;
        }
    });
});

//i need to empty out the credit card field. I need to be able to toggle the contents
const showCreditCardFieldContents = (credit,paypal,bitcoin) => {
    if(credit){
        creditCardField.innerHTML = originalCreditCardField  
    } else {
        creditCardField.innerHTML = ""
    }
    if(paypal){
        paypalSectionField.innerHTML = originalPaypalSectionField  
    } else {
        paypalSectionField.innerHTML = ""
    }
    if(bitcoin){
        bitcoinSectionField.innerHTML = originalBitcoinSectionField  
    } else {
        bitcoinSectionField.innerHTML = ""
    }
}

userPayment.addEventListener('change', event => {
    if (userPayment.value === "credit card"){
        showCreditCardFieldContents(true,false,false);
    } 
    if (userPayment.value === "paypal"){
        showCreditCardFieldContents(false,true,false);
    }
    if (userPayment.value === "bitcoin"){
        showCreditCardFieldContents(false,false,true);
    } 
});

//this function brings everything together when the register button is pressed
const submitButtonClicked = (event) => {


    //I want to prevent default behavior when one validation condition is not true
    let shouldWeProceed = isValidUsername(usersName.value) * isValidEmail(usersEmail.value) * isValidCreditCardNumber(userCreditCardNumber.value) * isValidZipcode(userZipCode.value) * isValidCvvCode(cardVerificationValue.value) * AtLeastOneCheckBoxesSlected(checkBoxesChecked)
    if (shouldWeProceed === 0){
        event.preventDefault()
    } 
        isThisChoiceValid(isValidUsername(usersName.value),usersName,"Can only contain letters a-z in lowercase")
        isThisChoiceValid(isValidEmail(usersEmail.value),usersEmail,"Needs to be a valid email")
        isThisChoiceValid(isValidCreditCardNumber(userCreditCardNumber.value),userCreditCardNumber,"Needs to be a valid credit card number")
        isThisChoiceValid(isValidZipcode(userZipCode.value),userZipCode,"Needs to be a valid zip code")
        isThisChoiceValid(isValidCvvCode(cardVerificationValue.value),cardVerificationValue,"The CVV code is on the back of your credit card, its three digits")    
}

submitButton.addEventListener('click', submitButtonClicked);