const myDebug = console.log;

export const convertMealDBIngredients = (mealDBRecipe) => {
    let ingredientArray = [];

    for( let i = 1; i <= 20; i++) {
        let ingKey = 'strIngredient' + i;
        let measKey = 'strMeasure' + i;
        
        if(mealDBRecipe[ingKey]) {
            let ingredientLine = mealDBRecipe[measKey] + ' ' + mealDBRecipe[ingKey];
            ingredientArray.push(ingredientLine);
        }
    }
    return ingredientArray;
}

export const convertMealDBtoWFD = (mealDBRecipe) => {
    const newWFDRecipe = {
        recipe_id: '',
        recipe_owner: '1', // default user
        recipe_name: mealDBRecipe.strMeal,
        mealDB_id: mealDBRecipe.idMeal,
        recipe_pic: mealDBRecipe.strMealThumb,
        recipe_cuisine: mealDBRecipe.strArea,
        recipe_category:mealDBRecipe.strCategory,
        recipe_ingredient_list: convertMealDBIngredients(mealDBRecipe),
        recipe_instructions: mealDBRecipe.strInstructions,
        recipe_tags: mealDBRecipe.strTags.split(','),
        recipe_video: mealDBRecipe.strYoutube,
        tweaked_original_id: '', // not tweaked
        recipe_source: mealDBRecipe.strSource
    }

    return newWFDRecipe;
}