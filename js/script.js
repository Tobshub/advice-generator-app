"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('https://api.adviceslip.com/advice', { method: 'GET' });
        let advice_obj = yield response.json();
        return advice_obj.slip;
    });
}
const adivceEl = document.getElementById('advice-text');
const adivceIdEl = document.getElementById('advice-id');
function main() {
    getRandomQuote()
        .then((obj) => {
        adivceEl ? adivceEl.textContent = `"${obj.advice}"` : console.log('el does not exist');
        adivceIdEl ? adivceIdEl.textContent = obj.id.toString() : console.log('el does not exist');
    })
        .catch((e) => {
        console.log('fuck', e);
    });
}
main();
const randomQuoteBtn = document.getElementById('dice-icon');
randomQuoteBtn ?
    randomQuoteBtn.addEventListener('click', () => main()) : '';
