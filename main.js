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
    },
    {
    src: "./assets/gallery/img1.png",
    alt: "Thumbnail Image 4"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]

// Menu Section
function menuHandler(){

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

}

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;

}

// Greeting Section

function greetingHandler(){

    // Greeting Title

    let currentHour = new Date().getHours();
    let greetingText;
    // console.log(currentHour)
    if (currentHour <12){
        greetingText = "Good Morning!";
    } else if (currentHour < 19){
        greetingText = "Good Afternoon!"
    } else if (currentHour <24){
        greetingText = "Good Evening!"
    } else {
        greetingText = "Welcome!";
    }

    const weatherCondition= "sunny";
    const userLocation = "Mumbai";
    let temperature = 22.867;

    // defining 2 different variables for celsius and fahr
    // Temperature conversion and display Greeting Text

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`


    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText; // whenever we load the page, this will get executed


    // this happens only if the click button happens
    // Functionality for buttons

    document.querySelector(".weather-group").addEventListener("click", function(event){
        if (event.target.id == "celsius"){
            document.querySelector("p#weather").innerHTML = celsiusText;
        } 
        else if (event.target.id == "fahr"){
            document.querySelector("p#weather").innerHTML = fahrText;
        }
    });
}

// Clock Section

function clockHandler(){
    setInterval(function(){
    let localTime = new Date()

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
    },1000);
}

// Gallery Section

function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img")
    mainImage.src = galleryImages[0].src; // making the first image in the array as the main image
    mainImage.alt = galleryImages[0].alt; 

    let thumbnails = document.querySelector("#gallery .thumbnails");

    galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img"); // for every image in the array, create a html element 
    thumb.src = image.src; // the source of the image,
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false; // ternary conditional  

    thumb.addEventListener("click", function(e){
        // console.log(e.target) // check the console whether the image is reflected or not
        // console.log(e.target.dataset.arrayIndex)
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];

        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        // make the thumbnail selection get highlighted
        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        }); // unhighlight all the images

        e.target.dataset.selected = true;

    })

    thumbnails.appendChild(thumb)

})

    
}

// Product Section

// <div class="product-item">
//     <img src="./assets/products/img6.png" alt="AstroFiction">
//     <div class="product-details">
//     <h3 class="product-title">AstroFiction</h3>
//     <p class="product-author">John Doe</p>
//     <p class="price-title">Price</p>
//     <p class="product-price">$ 49.90</p>
//     </div>
// </div>
function productsHandler(){

    let productSection = document.querySelector(".products-area");

    // Run a loop through the product and create an HTML element("product-item") for each of them.

    products.forEach(function(product, index){

        // create the HTML element for the individual product

        let productElement = document.createElement("div");
        productElement.classList.add("product-item");

        // Crete the product image

        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // Add all the child HTML elements of the product
        
        productElement.append(productImage);
        
        // Add the complete individual products to the product section

        productSection.append(productElement)


    });

}





// Call functions - Page Load

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();




// document.querySelector("#open-nav-menu").addEventListener("click", function(){
//     alert("menu button clicked");
// });


// close-nav-menu

// document.querySelector("#open-nav-menu").addEventListener("click", function(){
//     document.querySelector("header nav .wrapper").classList.add("nav-open");
// });

// document.querySelector("#close-nav-menu").addEventListener("click", function(){
//     document.querySelector("header nav .wrapper").classList.remove("nav-open");
// });



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

// function celsiusToFahr(temperature){
//     let fahr = (temperature * 9/5) + 32;
//     return fahr;

// }

// // Greeting Text- Dynamic

// let currentHour = new Date().getHours();
// let greetingText;
// // console.log(currentHour)
// if (currentHour <12){
//     greetingText = "Good Morning!";
// } else if (currentHour < 19){
//     greetingText = "Good Afternoon!"
// } else if (currentHour <24){
//     greetingText = "Good Evening!"
// } else {
//     greetingText = "Welcome!";
// }


// const weatherCondition= "sunny";
// const userLocation = "Mumbai";
// let temperature = 22.867;

// // defining 2 different variables for celsius and fahr



// let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
// let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`


// document.querySelector("#greeting").innerHTML = greetingText;
// document.querySelector("p#weather").innerHTML = celsiusText; // whenever we load the page, this will get executed


// // this happens only if the click button happens

// document.querySelector(".weather-group").addEventListener("click", function(event){
//     if (event.target.id == "celsius"){
//         document.querySelector("p#weather").innerHTML = celsiusText;
//     } 
//     else if (event.target.id == "fahr"){
//         document.querySelector("p#weather").innerHTML = fahrText;
//     }
// });

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

// setInterval(function(){
// let localTime = new Date()

// document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
// document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
// document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
// },1000);

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

// const galleryImages = [
//     {
//     src: "./assets/gallery/image1.jpg",
//     alt: "Thumbnail Image 1"
//     },
//     {
//     src: "./assets/gallery/image2.jpg",
//     alt: "Thumbnail Image 2"
//     },
//     {
//     src: "./assets/gallery/image3.jpg",
//     alt: "Thumbnail Image 3"
//     },
//     {
//     src: "./assets/gallery/img1.png",
//     alt: "Thumbnail Image 4"
//     }
// ];

// for (let i in galleryImages){
//     console.log(galleryImages[i]);
// }

// galleryImages.forEach(function(image, index){
//     console.log(index);
// })


//--------------------------

// Main Image -Dynamic

// let mainImage = document.querySelector("#gallery > img")
// mainImage.src = galleryImages[0].src // making the first image in the array as the main image
// mainImage.alt = galleryImages[0].alt 



//--------------------------

// Thumbnails -Dynamic


// let thumbnails = document.querySelector("#gallery .thumbnails")

// Previous HTML Code

// <img src="./assets/gallery/image1.jpg" 
// alt="Thumbnail Image 1" 
// data-array-index="0" 
// data-selected="true">

//------------------thumbnail images selection


// galleryImages.forEach(function(image, index){
//     let thumb = document.createElement("img"); // for every image in the array, create a html element 
//     thumb.src = image.src; // the source of the image,
//     thumb.alt = image.alt;
//     thumb.dataset.arrayIndex = index;
//     thumb.dataset.selected = false; 

//     // selecting the first image in the as the default main image
//     if (index ===0){ 
//         thumb.dataset.selected = true;
//     } else {
//         thumb.dataset.selected = false;
//     }

//     thumbnails.appendChild(thumb)

// })

// ------- Ternary Conditional for thumbnail selection

// galleryImages.forEach(function(image, index){
//     let thumb = document.createElement("img"); // for every image in the array, create a html element 
//     thumb.src = image.src; // the source of the image,
//     thumb.alt = image.alt;
//     thumb.dataset.arrayIndex = index;
//     thumb.dataset.selected = index === 0 ? true : false; // ternary conditional   
//     thumbnails.appendChild(thumb)

// })

//------- Gallery functionality 

// galleryImages.forEach(function(image, index){
//     let thumb = document.createElement("img"); // for every image in the array, create a html element 
//     thumb.src = image.src; // the source of the image,
//     thumb.alt = image.alt;
//     thumb.dataset.arrayIndex = index;
//     thumb.dataset.selected = index === 0 ? true : false; // ternary conditional  

//     thumb.addEventListener("click", function(e){
//         // console.log(e.target) // check the console whether the image is reflected or not
//         // console.log(e.target.dataset.arrayIndex)
//         let selectedIndex = e.target.dataset.arrayIndex;
//         let selectedImage = galleryImages[selectedIndex];

//         mainImage.src = selectedImage.src;
//         mainImage.alt = selectedImage.alt;

//         // make the thumbnail selection get highlighted
//         thumbnails.querySelectorAll("img").forEach(function(img){
//             img.dataset.selected = false;
//         }); // unhighlight all the images

//         e.target.dataset.selected = true;

//     })

//     thumbnails.appendChild(thumb)

// })




