document.addEventListener('DOMContentLoaded', () => {

    const cocktailForm = document.getElementById('cocktail-form')
    cocktailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cocktailName = document.getElementById('search').value
        // console.log(cocktailName)

        fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(function (response) {
            return response.json();
        })
        .then(json => renderDrinks(json.drinks))
    })

    function renderDrinks(array) {
        array.forEach((eachDrink) => {
            //Display Cocktail Name
            const cocktailList = document.getElementById('cocktail-list')
            const drinkNameLi = document.createElement('li')
            drinkNameLi.innerText = eachDrink.strDrink
            cocktailList.appendChild(drinkNameLi)
            //Display Cocktail Image
            const cocktailImg = document.createElement('img')
            cocktailImg.src = eachDrink.strDrinkThumb
            cocktailList.appendChild(cocktailImg)
        })

    }










    






})