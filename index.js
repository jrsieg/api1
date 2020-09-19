

let pokemonList = document.querySelector("#pokemonList");

const submitBtn = document.querySelector('.submit');


submitBtn.addEventListener('click', fetchResults);

function fetchResults(){

  while (pokemonList.firstChild){
    pokemonList.removeChild(pokemonList.firstChild)
  }



  
    fetch('https://pokeapi.co/api/v2/pokemon/') 
    .then(function(response) {   
      return response.json(); 
    })
    .then(function(json) {
        randomNum = Math.floor((Math.random() * 20) + 1);
        let pokemon = json.results[randomNum]
        console.log(pokemon.name);
        let listItem = document.createElement('li'); 
        listItem.innerHTML = '<p>' + pokemon.name + '</p>'; 
        pokemonList.appendChild(listItem);  

    });
  
};
