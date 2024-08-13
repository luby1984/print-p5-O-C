const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
	    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	}
];



//les variables 
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const p = document.querySelector(".banner-txt")
let index = 0

//affichage de dots
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		/*cette dot il doit rentre dans le container de dots*/
		dots.appendChild(dot); 
		if (i == index ){
			dot.classList.add("dot_selected");
		}
	}
}
displayDots();
/* dots il as un enfant que est dot = div on top */
/*donc mon tableau as un logeur de 4 =  que i ast inferiur at 4 on ajoute i++ est un premier tour de boucles il va 
creer un div a la quelle il va ajoute un class   et chaque fois il vas ajouter dans un conteneur*/


/* affichage click droit*/
function clickRight() {
arrowRight.addEventListener("click", () => {
	const slidesDots = document.querySelectorAll(".dots .dot");
	slidesDots[index].classList.remove("dot_selected");
    index++;
 if (index > slides.length -1/*la valeur de l'index*/) {
	index = 0;
 }
 slidesDots[index].classList.add("dot_selected");
 img.src = slides[index].image;
 p.innerHTML = slides[index].tagLine;
});
}
clickRight();

/*affichage click gouche*/
function clickLeft() {
	arrowLeft.addEventListener("click", () => {
		const slidesDots = document.querySelectorAll(".dots .dot");/*tableau de tout le point a chaque click*/
		slidesDots[index].classList.remove("dot_selected");
		index--;
	 if (index < 0) {
		index = slides.length -1;
	 }
	 slidesDots[index].classList.add("dot_selected");
	 /*je veux lui dire que ou click je modifie le src(chemi) donc est = slides e pour dire quel image besoin remetre la variable index*/
	 img.src = slides[index].image;
	 p.innerHTML = slides[index].tagLine;
	});
	}
	clickLeft();
