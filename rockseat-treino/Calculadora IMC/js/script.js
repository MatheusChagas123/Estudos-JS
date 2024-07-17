import {Modal} from './modal.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');





form.onsubmit = function(event){
  event.preventDefault()
  const weight = Number(inputWeight.value); 
  const height = Number(inputHeight.value);
  const result = IMC (weight,height);
  const Message = `Seu IMC é de ${result}`
    Modal.open()
  Modal.Message.innerText = Message
}



function IMC (weight,height){
  return (weight/((height/100)**2)).toFixed(2);
}