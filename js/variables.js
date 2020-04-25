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

//project regex
//this handled mutiple names and does not permit numbers
const userNameRegex = /^[a-z ,.'-]+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const creditCardRegex = /(\d{4})( |-|)(\d{4})( |-|)(\d{4})( |-|)(\d{4})/
const zipCodeRegex = /^\d{4}\d?$/
const cvvCodeRegex = /\d{3}\d?/


