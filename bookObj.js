const myLibrary = [];
// Object constructor to create the book object
function book(title,author,pages,read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read,
	this.info = function(){
		


	};
	
	
	
};
 const theRiverAndTheSource = new book('The River and The Source', 'Margaret.A.Ogola',324, 'not read yet');
// render function
function render(){
	let libraryElement = document.querySelector('.bookcard');
	libraryElement.innerHTML="";	
	for(let i = 0; i < myLibrary.length; i++){
		let book = myLibrary[i];
		let bookElement = document.createElement("div");
		bookElement.innerHTML = ` <div class='bookcard'>
		 <h1>Title: ${book.title}</h1>
		 <h3>Author: ${book.author}</h3>
		 <h3>Pages: ${book.pages}</h3>
		 <button class='removebook' onclick="removeBook(${i})">Remove</button?
		 </div>`
	
		libraryElement.appendChild(bookElement);

	}
};

//make the delete button to delete unwanted books
function removeBook(index){
	myLibrary.splice(index, 1);
	render();
};

//  function to add book to myLibrary array from user input in form

function addBookToLibrary(){
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").ariaChecked;
	let newBook = new book(title,author,pages,read);
	myLibrary.push(newBook);
	render();

	

}

document.getElementById("addbooks").addEventListener('submit', function(event){
	event.preventDefault();
	
	console.log(title, pages, author);
	
	addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
  let newForm = document.getElementById('addbooks');
	newForm.style.display = "none";


} );



// make the add book button to show the form on click

const addBookBtn = document.getElementById('newbookbtn');

addBookBtn.addEventListener('click', function(){
	let newBookForm = document.getElementById('addbooks');
	newBookForm.style.display = "flex";

})

