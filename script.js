let count = 1

document.addEventListener('DOMContentLoaded', () => {

    const cocktailForm = document.getElementById('cocktail-form')
    cocktailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cocktailName = document.getElementById('search').value
        // console.log(cocktailName)

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
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
            cocktailImg.setAttribute('id', 'img')
            cocktailImg.src = eachDrink.strDrinkThumb
            const likeButton = document.createElement('button')
            likeButton.setAttribute('class', 'btn')
            const likeButtonDiv = document.createElement('div')
            const likeButtonP = document.createElement('p')
            likeButtonDiv.append(likeButton, likeButtonP)
            likeButton.innerText = 'Like'
            
            
           //Append Elements to Cocktail Card
           cocktailCard.append(h2, cocktailImg, likeButtonDiv)
           const cocktailContainer = document.getElementById('cocktail-container') 
           cocktailContainer.appendChild(cocktailCard)

           
           //Liking Drink Event Listener
           likeButton.addEventListener('click', () => {
                likeButtonP.innerText++
                
           })
           //Cocktail Card Hover
           cocktailImg.addEventListener('mouseover', (e) => {
            
            const h3 = document.createElement('h')
            h3.innerText = "Directions"
            const drinkDir = document.createElement('p')
            drinkDir.textContent = eachDrink.strInstructions
            cocktailCard.appendChild(drinkDir, h3)
           })

        })

    }










    

})