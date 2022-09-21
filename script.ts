type AdivceObj = {
    'id': number,
    'advice': string
}

async function getRandomQuote(){
  let response = await fetch('https://api.adviceslip.com/advice', {method: 'GET'});
  let advice_obj = await response.json();
  return advice_obj.slip;
}

const adivceEl = document.getElementById('advice-text')
const adivceIdEl = document.getElementById('advice-id')

function main() {
 
  getRandomQuote()
  .then( (obj: AdivceObj)=>{
    adivceEl? adivceEl.textContent = `"${obj.advice}"` : console.log('el does not exist');
    adivceIdEl? adivceIdEl.textContent = obj.id.toString() : console.log('el does not exist');
  })
  .catch((e)=>{
    console.log('fuck',e);
  })
}

main();


const randomQuoteBtn = document.getElementById('dice-icon');

randomQuoteBtn?
  randomQuoteBtn.addEventListener('click',()=>main()) : '';