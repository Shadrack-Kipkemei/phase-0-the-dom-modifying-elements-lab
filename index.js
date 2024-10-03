// Write your code here!
const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");


newHeader.id = 'victory';
newHeader.textContent = "Shadrack is the champion";
document.body.appendChild(newHeader);