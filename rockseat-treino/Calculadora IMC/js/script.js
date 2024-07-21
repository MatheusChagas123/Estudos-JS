import {Modal} from './modal.js'
import {AlertError}from './alert-error.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');





form.onsubmit = function(event){
  event.preventDefault()
  const weight = Number(inputWeight.value); 
  const height = Number(inputHeight.value);
  console.log(notNumber(weight));
  console.log(notNumber(height));

  const showAlertError=notNumber(weight)|| notNumber(height)

  if(showAlertError){
    AlertError.open();
    return;
  }
  AlertError.close()

  const result = IMC (weight,height);
  const Message = `Seu IMC é de ${result}`
    Modal.open()
  Modal.Message.innerText = Message
}

function notNumber(value){
  return isNaN(value) || value == "";
}

function IMC (weight,height){
  return (weight/((height/100)**2)).toFixed(2);
}