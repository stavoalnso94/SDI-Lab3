//alert("JavaScript works!");

// Alonso Gustavo
// SDI 1409
// Lab 3 

// My variables
var myName             = "Gustavo"              ;           
var myLastName         = "Alonso"             ;            
var myFavoriteStore    = 'Best Buy\'s'     ;            
var numberOfMiles     = 6.5                       ;        	 
var Highway         	                                        ;                   
var favoriteDevice                                       ;         
var price                                                       ;
var protectiveCase                                     ;
var Color                                                       ;    
var Total                                                        ;

// My outputs
console.log("My name is "     + myName               + ".");
console.log("I shop at "         + myFavoriteStore + ".");
console.log("It's "                   + numberOfMiles    + " to the store.");


// My confirm
Highway = confirm("Did you take the highway?");
 



// If
if (Highway == true) {
	console.log("It's " + Highway + " that I took the highway");
		var favoriteDevice =  prompt("What is your favorite mobile device?" , "iPhone");
 	console.log(favoriteDevice);
 		var price                  =  parseFloat(prompt("Type the price of your favorite mobile device", "199.99"));
if (price == 199.99) { 
	console.log("It's " + price + " correct!");
} else { 
	console.log( + price + " Is the price for your chosen device.");}

// else
} else { 
	console.log("It's " + Highway + " that I took the highway");}
		var protectiveCase = prompt("Would you be getting a protective case as well?");
		console.log(protectiveCase);
		
		var Color = prompt("What color would you like for the protective case? \nEnter the color you like.", "Red");
		console.log(Color);
if (Color === "Red") {
	console.log("Good choice!!!");
} else {
	console.log("Thats a nice color.........");
}

console.log("Congratulations on your purchase, have a good day!!");



