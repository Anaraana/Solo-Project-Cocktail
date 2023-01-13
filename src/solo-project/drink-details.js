import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";


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
  }, [idDrink]);

  console.log(drink);

  return (
    <div className="drink-detail-container"  style={{backgroundImage:'url(https://everydaypower.com/wp-content/uploads/2021/05/50-Star-Quotes-About-the-Beauty-of-the-Night-Sky.jpg)'}}>
        
     
        <h1 className="drink-detail-word">DRINK DETAILS</h1>
     
      <div className="drink-detail-small-container">
        
        <img style={{width:'50em', height:'50em',marginTop:'30px',borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}src={drink[0]?.strDrinkThumb} alt='img'/>
       
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
          <a href={drink[0]?.strVideo} target="_blank" rel="noreferrer" >
            {drink[0]?.strVideo}
          </a></h4>
        </div>
        {/* <img src={drink[0]?.strImageSource} /> */}
      </div>
    </div>
  );
}
