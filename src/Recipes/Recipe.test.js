import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Recipe from './Recipe';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const testRecipe = {
        "recipe_id": "1",
        "recipe_owner": "1",
        "tweaked_original_id": "NULL",
        "mealDB_id": "52980",
        "recipe_name":"Stamppot",
        "recipe_pic":"https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
        "recipe_cuisine":"Dutch",
        "recipe_category":"Pork",
        "recipe_ingredient_list":["1.5kg Potatoes", " Pinch Pepper", "2 leaves Bay Leaf", "2 Shallots", "3 tbs Butter", "750g Kale", "2 Sausages", "500ml Milk", "Grated Nutmeg", "Pinch Salt"],
        "recipe_instructions":
        " Wash and peel the potatoes and cut into similarly sized pieces for even cooking. In a large soup pot, boil the potatoes and the bay leaves in salted water for 20 minutes. Discard the bay leaves. If you're not using a bag of ready-cut curly kale, wash the bunches thoroughly under cool running water to get rid of all soil—you wouldn't want that gritty texture in your finished dish. Trim any coarse stems and discard any brown leaves. With a sharp knife, cut the curly kale into thin strips. Peel and chop the shallots. In a frying pan or skillet, melt 1 tbsp. of butter and saute the shallots for a few minutes before adding the curly kale and 2 tbsp. of water. Season and cook for about 10 minutes, or until tender. Warm the milk on the stove or in the microwave. Drain, shake and dry the potatoes with kitchen towels before mashing with a potato masher or ricer. Working quickly, add the warm milk and the remaining butter. Season to taste with nutmeg, salt, and pepper. Mix the cooked curly kale through the cooked mashed potato mixture. Top with slices of the smoked sausage and serve hot with your favorite mustard or gravy. Serve and enjoy!",
        "recipe_source":"https://www.thespruceeats.com/stamppot-with-curly-kale-and-rookworst-1128837",
        "recipe_tags":["Savory","Breakfast"],
        "recipe_video":"https://www.youtube.com/watch?v=hTrSXryX31A",
        "recipe_public": "true"
    }
    ReactDOM.render(
        <BrowserRouter>
        <Recipe recipe={testRecipe} />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});


