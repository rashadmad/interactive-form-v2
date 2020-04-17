"use strict";
//first off need to take in all of the fields that I will be getting data from

const usersName = document.getElementById('name');
const usersEmail = document.getElementById('mail');
const usersJobRole = document.getElementById('user-email');
const userSize = document.getElementById('user-size');
const userDesign = document.getElementById('color');
const userActivities = document.getElementsByClassName('.activities');
const userPayment = document.getElementById('payment');
const userCreditCardNumber = document.getElementById('cc-num');
const userZipCode = document.getElementById('zip');
const cardVerificationValue = document.getElementById('cvv');
const userExpMonth = document.getElementById('exp-month');
const userExpYear = document.getElementById('exp-year');
const submitButton = document.querySelector('button');

const form = document.getElementById('form');


//project regex
//this handled mutiple names and does not permit numbers
const userNameRegex = /^[a-z ,.'-]+$/;
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const creditCardRegex = /(\d{4})( |-|)(\d{4})( |-|)(\d{4})( |-|)(\d{4})/
const creditCardReplace = ;
const zipCodeRegex = /^\d{4}\d?$/
const cvvCodeRegex = /\d{3}\d?/

