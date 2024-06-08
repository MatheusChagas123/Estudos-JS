
const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts =1
console.log(xAttempts)
 function handleClick(event){
   event.preventDefault()

   const inputNumber = document.querySelector("#inputNumber");

     if(Number(inputNumber.value)==randomNumber){
       document.querySelector(".screen1").classList.add("hide")
       document.querySelector(".screen2").classList.remove("hide");
       const h2 = document.createElement("h2")
       h2.textContent = `Você acertou em ${xAttempts} tentativas`
       const screen2 = document.querySelector(".screen2")
    const button = screen2.querySelector("button")
    screen2.insertBefore(h2, button)  
       
     }

  xAttempts++
  
 }

 function attPage(event) {
  location.reload()
}

