function MyRecipesComponents({
  label,
  image,
  calories,
  ingredients,
  cuisineType,
  mealType,
  url
}) {

  return (
    <div className="recipe">

      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img src={image} alt="dish" />
      </div>

      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>

      <div className="container">
        <p>Cuisine: {cuisineType}</p>
      </div>

      <div className="container">
        <p>Meal: {mealType}</p>
      </div>

      <div className="container">
        <a href={url} target="_blank" rel="noreferrer">
          View Recipe
        </a>
      </div>

      <ul className="container list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default MyRecipesComponents;