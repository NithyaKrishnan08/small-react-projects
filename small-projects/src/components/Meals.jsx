import { useState, useEffect } from 'react';
import "../styles/meals.css";
import axios from 'axios';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((response) => {
      setMeals(response.data.meals);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const mealslist = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="meals-container">{mealslist}</div>;
};

export default Meals;