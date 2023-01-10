import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Drink from "./drink";

export default function DrinkDetails() {
  const { idDrink } = useParams();
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      )
      .then((res) => {
        if (res.data.drinks !== null) setDrink(res.data.drinks);
      })

      .catch((err) => {
        console.log("error zaagad bn shde Anaraa haha");
      })
      .finally(() => {});
  }, []);

  console.log(drink);

  return (
    <div className="drink-detail-container">
     
        <h1 className="drink-detail-word">DRINK DETAILS</h1>
     
      <div className="drink-detail-small-container">
        
        <img style={{width:'50em', height:'50em',marginTop:'30px',borderRadius:'15px'}}src={drink[0]?.strDrinkThumb} />
       
        <div>
          <h1>{drink[0]?.strDrink}</h1>
        </div>
        
        <div>
          <b><h2>Ingredients:</h2></b>
        </div>
        <div><h4>{drink[0]?.strIngredient1}   {drink[0]?.strMeasure1} </h4></div>
    
        <div><h4>{drink[0]?.strIngredient2}   {drink[0]?.strMeasure2}</h4></div>
        
        <div><h4>{drink[0]?.strIngredient3}   {drink[0]?.strMeasure3} </h4></div>
        
        <div><h4>{drink[0]?.strIngredient4}   {drink[0]?.strMeasure4} </h4></div>
       
        <div><h4>{drink[0]?.strIngredient5}   {drink[0]?.strMeasure5} </h4></div>
        
        <div>
          <b><h2>Instructions:</h2></b>
        </div>
        <div><h4>{drink[0]?.strInstructions}</h4></div>
        <div>
          <b><h2>Glass:</h2></b>
        </div>
        <div><h4>{drink[0]?.strGlass}</h4></div>
        <div>
          <b><h2>Video:</h2></b>
        </div>
        <div><h4>
          <a href={drink[0]?.strVideo} target="_blank">
            {drink[0]?.strVideo}
          </a></h4>
        </div>
        {/* <img src={drink[0]?.strImageSource} /> */}
      </div>
    </div>
  );
}
