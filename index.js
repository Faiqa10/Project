

async function findMeal() {
    const searchedText = document.getElementById('input').value;
    const mealContainer = document.getElementById('container');
    
    
    mealContainer.innerHTML = '';
  
   
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`;
  
    try {
      const reply = await fetch(api);
      const data = await reply.json();
  
      if (data.meals) {
        
        data.meals.forEach(meal => {
          const mealItem = document.createElement('div');
          mealItem.className = 'meal-item';
  
          mealItem.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="meal-name">${meal.strMeal}</div>
          `;
  
          mealContainer.appendChild(mealItem);
        });

      } else {
        
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No results found for your search.';
        mealContainer.appendChild(noResults);
      }

    } catch (error) {
      console.error("Error fetching the meal data:", error);
      mealContainer.innerHTML = '<div class="no-results">An error occurred. Please try again later.</div>';
    }
  }


  const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
  