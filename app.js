// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Element object = Document Node/ElmentObject.method(css element selector)
const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//element object creation-valueset-parent object append- loop
for (let i = 1; i < 152; i++) {
  //create img element object
  const newImg = document.createElement("img");
  //add value to src property of img element object
  //string template literal
  newImg.src = `${baseURL}${i}.png`;
  //append inside parent element object(section #container) the child object element(img)
  //adding to nodelist object-childNodes property of parent element object
  //adding to htmlcollection object - children property of parent element object
  //adding to lastChild of parent element
  // console.dir(container)
  container.appendChild(newImg);
}
