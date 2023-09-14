function book(title,auther,pages,read){
	this.title = title,
	this.auther = auther,
	this.pages = pages,
	this.read = read,
	this.info = function(){
		return(`${title} by ${auther},${pages} pages, ${read}`);


	};
	
	
	
};
const theRiverAndTheSource = new book('The River and The Source', 'Margaret.A.Ogola',324, 'not read yet');
const bestRead = new book('WHEN THE STARS ARE SCATTERED', "SAM KAHIGA",298, "HAVE READ");
console.log(bestRead.info());
console.log(theRiverAndTheSource.info());

book.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
}
document.getElementsByClassName(addbook).backroundcolor = "red";
