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
            //Create Cocktail Card
            const h2 = document.createElement('h2')
            h2.innerText = eachDrink.strDrink
            const cocktailCard = document.createElement('div')
            const cocktailImg = document.createElement('img')
            cocktailImg.src = eachDrink.strDrinkThumb
            const cardLikes = document.createElement('p')
            const cardButton = document.createElement('button')
            cardButton.textContent = 'Like'
           //Append Elements to Cocktail Card
           cocktailCard.append(h2, cocktailImg, cardButton, cardLikes)
           const cocktailContainer = document.getElementById('cocktail-container') 
           cocktailContainer.appendChild(cocktailCard)

        })

    }










    






})