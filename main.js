
// document.querySelector("#open-nav-menu").addEventListener("click", function(){
//     alert("menu button clicked");
// });


// close-nav-menu


document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});




// Greeting Section


// function celsiusToFahr(temperature){
//     let fahr = (temperature * 9/5) + 32;
//     return fahr;

// }

// const greetingText = "Good Afternoon";
// const weatherCondition= "sunny";
// const userLocation = "Mumbai";
// let temperature = 22.867;

// let weatherText = "The weather is" + weatherCondition + " cloudy in London and it's 22 deg C outside."

// Using backticks instead of concatenation

// alert("The temperature outside is" + celsiusToFahr(temperature) + "°F");

// let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`


// document.querySelector("#greeting").innerHTML = greetingText;
// document.querySelector("p#weather").innerHTML = weatherText;

//Radio Button - Celsius to Fahrenheit

// document.querySelector(".weather-group").addEventListener("click", function(){
//     console.log("clicked");
// });

// How do we know where we clicked

// document.querySelector(".weather-group").addEventListener("click", function(event){
//     console.log(event.target.id);
// });


// Re-defining the temperature block

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;

}

const greetingText = "Good Afternoon";
const weatherCondition= "sunny";
const userLocation = "Mumbai";
let temperature = 22.867;

// defining 2 different variables for celsius and fahr



let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`


document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText; // whenever we load the page, this will get executed


// this happens only if the click button happens

document.querySelector(".weather-group").addEventListener("click", function(event){
    if (event.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;
    } 
    else if (event.target.id == "fahr"){
        document.querySelector("p#weather").innerHTML = fahrText;
    }
});

// Local-Time Section

//new Date().getHours();
//new Date().getMinutes();
//new Date().getSeconds();

// console.log(new Date().getHours());

// let localTime = new Date()

// document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
// document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
// document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();


// console.log("outside the timeout");


// setTimeout(function(){
//     console.log("inside the setTimeout function "); // executed after 3 seconds
// },3000);


// setInterval(function(){
//     console.log("inside the setInterval function");
// },1000);

setInterval(function(){
let localTime = new Date()

document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
},1000);

// Now we will get a ticking clock




