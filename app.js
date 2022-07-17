// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Element object = Document Node/ElmentObject.method(css element selector)
const container = document.querySelector("#container")
//create img element object
const newImg = document.createElement("img")
//add value to src property of img element object
newImg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//append inside parent element object(section #container) the child object element(img)
//adding to nodelist object-childNodes property of parent element object
//adding to htmlcollection object - children property of parent element object
//adding to lastChild of parent element
// console.dir(container)
container.appendChild(newImg)

