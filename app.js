document.getElementById('search_button').addEventListener('click',function(e){
    e.preventDefault();

let  input = document.getElementById('search-name').value;   
    
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

.then(response =>response.json())
.then(data =>{
let html = "";
if(data.meals){
    data.meals.forEach(meal =>{
        html += `
        <div id="single_item" class="single-item">
        <img class="Thumbnail-img" src="${meal.strMealThumb}" alt="">
        <h4 class="meal-name">${meal.strMeal}</h4>
        <div id="more-info">
        <h4>Ingredients</h4>
        <ul>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient1}</li>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient2}</li>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient3}</li>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient4}</li>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient5}</li>
        <li><img src="checkbox-fill.png" alt=""> ${meal.strIngredient6}</li>
        </ul>
        </div>
        </div>
        `;
    });
}

else{
    html += `
    <div class="error-message">
    <h3>Search No Result
    </h3>
    <p>We're sorry. We cannot find any matches for your search term.</p>
    </div>
    `;
}

document.getElementById('meal-info').innerHTML = html;


});

})
// function expandMore(){
// const moreDetails =document.getElementById('more-info');
// for (let i = 0; i < moreDetails.length; i++) {
//     const moreDetail = moreDetails[i];
//    console.log(moreDetail) ;

// if(moreDetail.style.display = "none"){
//     moreDetail.style.display = "block"; 
// }

// if(moreDetail.style.display = "block"){
//     moreDetail.style.display = "none"; 
// }

// }
// }
