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
            h2.setAttribute('id', 'h2')
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
            
            const h3 = document.createElement('h3')
            h3.setAttribute('id', 'h3')
            h3.textContent = "Directions"
            const drinkDir = document.createElement('p')
            drinkDir.setAttribute('id', 'drinkDir')
            drinkDir.textContent = eachDrink.strInstructions
            
            const h4 = document.createElement('h4')
            h4.setAttribute('id', 'h4')
            h4.textContent = 'Ingredients'
            cocktailCard.append(h4)
            
            for(let i=1; i<16; i++){
                let ingredient = document.createElement('p')
                ingredient.setAttribute('id', 'ingredientList')
                console.log(i)
                ingredient.innerHTML = eachDrink[`strIngredient${i}`]
                cocktailCard.append(ingredient)
                cocktailCard.append(h3, drinkDir)
                
                //Cocktailcard Mouseout Event
                cocktailImg.addEventListener('mouseout', () => {
                    drinkDir.remove();
                    h3.remove();
                    ingredient.remove()
                    h4.remove();
                })
            }
        })


        })

    }










    

})