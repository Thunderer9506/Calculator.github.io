const button = document.getElementsByClassName("button")
let screen = document.querySelector('p')
let calculation = ""

for(let i = 0;i<button.length; i++){
    button[i].addEventListener("click",function(e){
        screen.innerText = 0
        if(this.innerText == "DEL"){
            calculation = calculation.substring(0,calculation.length-1)
        }
        else if(this.innerText == "RESET"){
            screen.innerText = 0
            calculation = ""
        }
        else if(this.innerText == "="){
            calculation = eval(calculation)
        }
        else{
            calculation = calculation + this.innerText
        }
        screen.innerText = calculation
    })
}