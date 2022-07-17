//ULR: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Element object = Document Node/ElmentObject.method(css element selector)
//parent element object - first occurence
const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//element object creation-valueset-parent object append- loop
for (let i = 1; i <= 151; i++) {
  //create div,span ,label,img element object - documentObject.method(argument)
  const pokeBox = document.createElement("div");
  //adding class to div/pokeBox.classList - DOMTokeListObject.add("className")
  pokeBox.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`; //string template literal //human visible text
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`; //string template literal //add value to src property of img element object

  //append inside parent element object the child object element // console.dir(container)
  //adding to nodelist object-childNodes property of parent element object
  //adding to htmlcollection object - children property of parent element object
  //adding to lastChild of parent element
  pokeBox.appendChild(newImg);
  pokeBox.appendChild(label); //could multi element object append if using append()
  container.appendChild(pokeBox);
}

{
  /* <div>
  <img></img>
  <span></span>
</div> */
}
