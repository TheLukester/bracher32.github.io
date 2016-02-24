var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lucas_judo_small.jpg') {
      myImage.setAttribute ('src','images/custard.png');
    } else {
      myImage.setAttribute ('src','images/lucas_judo_small.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'My name isn\'t ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName = localStorge.getItem('name');
	myHeading.textContent = 'My name isn\'t ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}