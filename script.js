document.addEventListener('DOMContentLoaded', () => {

    const cocktailForm = document.getElementById('cocktail-form')
    cocktailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cocktailName = document.getElementById('search').value
        console.log(cocktail)

        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(function (response) {
            return response.json();
        })
        .then(json => renderDrinks(json.drinks))
    })

    function renderDrinks(array) {
        array.forEach((drink) => {
            const cocktailList = document.getElementById('cocktail-list')

        })

    }










    






})