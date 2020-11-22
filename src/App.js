import Recipe from './Recipe';
import dotenv from 'dotenv';
import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {
  dotenv.config();
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Search Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes-list">
        {recipes.map( recipe =>(          
          <Recipe 
            key={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            label={recipe.recipe.label}
            image={recipe.recipe.image}  
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
