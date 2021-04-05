
let input = document.getElementById('search-name').value;


document.getElementById('search_button').addEventListener('click', function (e) {
    e.preventDefault();
    showMeal()
});

// photo  strMealThumb
//name  strMeal

const showMeal = () => {
    const parentDiv = document.getElementById('food-info');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

        .then(res => res.json())
        .then(data => {
            let item = data.meals;
            //console.log(item.length);
            for (let i = 0; i < item.length; i++) {
                const food = item[i];
                //console.log(food);
                const foodInfoDiv = document.createElement('div');
                foodInfoDiv.className = 'food-item';
                const foodInfo = `
             <img src="${food.strMealThumb}" />
             <h3 onclick="showDetails('${food.idMeal}')" class="food-text">${food.strMeal}</h3>
             `
                foodInfoDiv.innerHTML = foodInfo;
                parentDiv.appendChild(foodInfoDiv);
            };
        });
}

const showDetails = (id) => {
    const ChildDiv = document.getElementById('food-details');
    ChildDiv.innerHTML = ' ';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
    `)
        .then(res => res.json())
        .then(foodDetails => {
            const foodDetail = foodDetails.meals;
            const div = document.createElement('div');
            div.className = 'food';
            foodDetail.forEach(element => {
                const h4 = document.createElement('h4');
                h4.innerHTML = element.strMeal;
                const p = document.createElement('p');
                p.innerHTML = element.strInstructions;
                div.appendChild(h4);
                div.appendChild(p);
                ChildDiv.appendChild(div);
                div.addEventListener('click', (e) => {
                    e.preventDefault();
                    div.style.display = 'none';
                })
            })
        })

}


