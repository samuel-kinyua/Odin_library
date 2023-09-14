



const myLibrary = [];
// Object constructor to create the book object
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

//  function to add book to myLibrary array from user input in form

function addBookToLibrary(){
	
	let newBook = new book(title,author,pages,read);
		myLibrary.push(newBook);
	

}

document.getElementById("addbooks").addEventListener('submit', function(event){
	event.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = "read";
	console.log(title, pages, author);
	
	addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);

} );

console.log(myLibrary);
