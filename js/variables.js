"use strict";
//first off need to take in all of the fields that I will be getting data from


/* user name and email */
const usersName = document.getElementById('name');
const usersEmail = document.getElementById('mail');
/* job fields */
const jobRoleSelect = document.getElementById('title')
const otherInputField = document.getElementById('other-title');
const usersJobRole = document.getElementById('user-email');
/* Shirt section */
const tshirtDesign = document.getElementById('design');
const colorSelectField = document.getElementById('color');
/* activities section */
const userActivities = document.getElementsByClassName('.activities');
const userPayment = document.getElementById('payment');
const userCreditCardNumber = document.getElementById('cc-num');
const cardVerificationValue = document.getElementById('cvv');
const userZipCode = document.getElementById('zip');
const userExpMonth = document.getElementById('exp-month');
const userExpYear = document.getElementById('exp-year');
const creditCardField = document.getElementById('credit-card');
const originalCreditCardFieldStat = creditCardField.innerHTML

/* general form stuffs */
const submitButton = document.querySelector('button');
const form = document.getElementById('form');

//activities varibles
const mainConfrenceInput = document.getElementById('mainConfrence'); 
const javaScriptFrameworksInput = document.getElementById('javaScriptFrameworks');
const javaScriptLibrariesInput = document.getElementById('javaScriptLibraries');
const expressWorkshopInput = document.getElementById('expressWorkshop');
const nodeWorkshopInput = document.getElementById('nodeWorkshop');
const buildTools = document.getElementById('buildTools');
const npmWorkshop = document.getElementById('npmWorkshop');

/* Validation tooltips */
const userInfo = document.querySelector('.user-info'); 
// const emailToolTip = document.createElement("<span>Must be a valid email address</span>");
// const zipCodeToolTip = document.createElement("<span>Must be a valid zipcode</span>");
// const cvvToolTip = document.createElement("<span>This is the three digit number on the back of your credit card number</span>");



//project regex
//this handled mutiple names and does not permit numbers
const userNameRegex = /^[a-z ,.'-]+$/;
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const creditCardRegex = /(\d{4})( |-|)(\d{4})( |-|)(\d{4})( |-|)(\d{4})/
const zipCodeRegex = /^\d{4}\d?$/
const cvvCodeRegex = /\d{3}\d?/

