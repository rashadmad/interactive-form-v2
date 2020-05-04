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
const userActivities = document.getElementsByClassName('activities');
const userPayment = document.getElementById('payment');
const userCreditCardNumber = document.getElementById('cc-num');
const cardVerificationValue = document.getElementById('cvv');
const userZipCode = document.getElementById('zip');
const userExpMonth = document.getElementById('exp-month');
const userExpYear = document.getElementById('exp-year');
/* Payment section */
const paypalSectionField = document.getElementById('paypal');
const bitcoinSectionField = document.getElementById('bitcoin');
const creditCardField = document.getElementById('credit-card');

/* general form stuffs */
const submitButton = document.querySelector('button');
const form = document.getElementById('form');

//activities varibles
const labelList = document.getElementsByTagName('label');
const activitiesLabel = labelList[6];
const mainConfrenceInput = document.getElementById('mainConfrence'); 
const javaScriptFrameworksInput = document.getElementById('javaScriptFrameworks');
const javaScriptLibrariesInput = document.getElementById('javaScriptLibraries');
const expressWorkshopInput = document.getElementById('expressWorkshop');
const nodeWorkshopInput = document.getElementById('nodeWorkshop');
const buildTools = document.getElementById('buildTools');
const npmWorkshop = document.getElementById('npmWorkshop');
let activitiesTooltipToggled = false;

let spanContainer = document.createElement('span');
spanContainer.textContent = 'your total is $0';
spanContainer.classList.add('total')
labelList[13].parentNode.insertBefore(spanContainer, labelList[13]);

/* Validation tooltips */
const userInfo = document.querySelector('.user-info'); 
let checkBoxesChecked = 0;

//project regex
//this handled mutiple names and does not permit numbers
const userNameRegex = /^[a-z|A-Z|1-9 ,.'-]+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const creditCardRegex = /(\d{4})( |-|)(\d{4})( |-|)(\d{4})( |-|)(\d{4}|\d)/
const zipCodeRegex = /^\d{4}\d?$/
const cvvCodeRegex = /\d{3}\d?/


