let pokemonList = document.querySelector('ul');
randomNum = Math.floor((Math.random() * 20) + 1);
const submitBtn = document.querySelector('.submit');


submitBtn.addEventListener('click', fetchResults);

function fetchResults(){
  fetch('https://pokeapi.co/api/v2/pokemon/') 
  .then(function(response) {   
    return response.json(); 
  })
  .then(function(json) {
      let pokemon = json.results[randomNum]
      console.log(pokemon.name);
      let listItem = document.createElement('li'); 
      listItem.innerHTML = '<p>' + pokemon.name + '</p>'; 
      pokemonList.appendChild(listItem);  

  });
};
