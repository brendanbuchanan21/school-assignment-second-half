//Function to replace the content and show output area. Called from HTML.
function replaceContent() {
	//declaring the variables
	let myRecipientName;
	//variable that will hold the host name
	let myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipient-input").value
	//setting the variable to the input field's id named recipientNameInput's value
	myHostName = document.getElementById("host-input").value

	//logging to devtools console
	console.log('Variable myRecipientName: ' + myRecipientName)
	//logging to devtools console
	console.log('Variable myHostName: ' + myHostName)
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipient-placeholder").innerHTML = myRecipientName
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("host-placeholder").innerHTML = myHostName

	//make output area visible by removing hidden class
	document.getElementById("outputArea").classList.remove("hidden")


} 