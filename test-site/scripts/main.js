let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//setting user name 
function setUsername(){
    const myName = prompt("Enter your name");
    if(!myName){
        setUsername();
    }
    localStorage.setItem("name" , myName);
    myHeading.textContent`Welcome to Teyvat, ${myName}`;
}


if(!localStorage.getItem("name")){
    setUsername();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Teyvat, ${storedName}`;
}

myButton.onclick = () => {
    setUsername();
}