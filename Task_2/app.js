// Button Color Change
let button = document.getElementById("Color-button");
button.addEventListener("click",function(){
    if(button.style.background=="red")
    {
        button.style.background="blue";
    }
    else
    {
        button.style.background="red";
    }    
});

//Greeting Message 
function showGreeting() {
    let hour = new Date().getHours();
    if(hour<12)
    {
        alert("Good Morning!");
    }
    else if(hour<18)
    {
        alert("Good Afternoon!");
    }
    else 
    {
        alert("Good Evening!");
    }
}

//Calculator 
function addNumbers() {
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let answer = number1 + number2;
    document.getElementById("result").innerHTML = "Result = " + answer;
}