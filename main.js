
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



//Loops - For Loop

// for (let a = 0; a<10 ; a++ ){

//     console.log(a);

// }

// --------Loops in arrays

// let animals = ["dog", "cat", "lion"]

// for (let a=0 ; a<animals.length; a++){
//     console.log(animals[a]);
// }

// ---------Enhanced For loop (for in)

// let animals = ["dog", "cat", "lion"]

// for (let a in animals){
//     console.log(animals[a]);
// }


// ------For loop in an object (get keys)

// let animal = {"name": "dog", "color" : "white"};

// for (let a in animal){
//     console.log(a);
// }


// ------For loop in an object (get values)


// let animals = {"name": "dog", "color" : "white"};

// for (let a in animal){
//     console.log(animals[a]);
// }

// ------For loop in an object (get both keys and values)


// let animaltype = {"name": "dog", "color" : "white"};

// for (let a in animal){
//     console.log(a + ":" + animaltype[a]);
// }



// Project - Gallery Section

const galleryImages = [
    {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1"
    },
    {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2"
    },
    {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3"
    }
];

// for (let i in galleryImages){
//     console.log(galleryImages[i]);
// }

// galleryImages.forEach(function(image, index){
//     console.log(index);
// })

galleryImages.forEach(function(image, index){
    console.log(image);
})





