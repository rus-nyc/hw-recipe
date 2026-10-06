import MyRecipesComponents from './MyRecipesComponents';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

const MY_ID = import.meta.env.VITE_MY_ID;
const MY_KEY = import.meta.env.VITE_MY_KEY;

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('chicken');

  useEffect(() => {

    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );

      const data = await response.json();
      console.log(data);
      setMyRecipes(data.hits || []);
    };

    getRecipe();

  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div className="App">

      <div className="container">
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input
            className="search"
            onChange={myRecipeSearch}
            value={mySearch}
          />
        </form>
      </div>

      <div className="container">
        <button onClick={finalSearch}>
          Search
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponents
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          cuisineType={element.recipe.cuisineType}
          mealType={element.recipe.mealType}
          url={element.recipe.url}
        />
      ))}

    </div>
  );
}

export default App;