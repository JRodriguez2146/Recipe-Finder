const form = document.querySelector('form');
const results = document.querySelector('.results');
const search = document.querySelector('.search');
let searchQuery = '';
const APP_KEY = '******';
const URL = ' https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APP_KEY}';


form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    getRecipe();
});

async function getRecipe(){

    const URL = ' https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APP_KEY}&chicken&to=20';
    const response = await fetch(URL);
    const data = await response.json
    console.log(response);


}
