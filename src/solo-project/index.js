import React, { createContext, useState,useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "./header";
import SearchFilter from "./search-filter";
import Populardrinks from "./drink";
import HeartSvg from "./favorite"
import FavoriteList from "./favorite";



// const reducerDrinks = (currState, action) => {
//     switch (action.type) {
//       case "addToFavourite":
//         return {
//           channels: [...currState.drink, action.data],
//           channelIds: [...currState.idDrink, action.data.idDrink],
//         };
//       case "RemoveFromFavourite":
//         return {
//           channels: currState.drinks.filter(
//             (drink) => drink.idDrink !== action.data.idDrink
//           ),
//           idDrink: currState.idDrink.filter(
//             (id) => id !== action.data.idDrink
//           ),
//         };
//       default:
//         window.alert("error!");
//     }
//   };
// export const CocktailContext = createContext();

export default function CocktailSearch() {
  const [search, setSearch] = useState([]);
  
    
  const navigate = useNavigate();
//   const [cart, updateCart]=useReducer (reducer, {
//     totalQty:0,
//     totalItemList:[]
//   });
// console.log(search)


//   const fetchdrinks = (cocktailsName) => {
//     console.log(cocktailsName); //neree olood darhad api duudaj bga
//     axios
//       .get(
//         `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailsName}`
//       )
//       .then((res) => {
//         // setCocktails(res.data.drinks);
//         setSearch(res.data.drinks);
//         // navigate(`${res.data.drinks[0].idDrink}`)
//         navigate(`${res.data.drinks[0].idDrink}`);
//         console.log(res.data.drinks[0].idDrink);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {});
//   };

  return (
    <div className="cocktails-main-container"
    // style={{opacity:'1px',backgroundImage:'url(https://everydaypower.com/wp-content/uploads/2021/05/50-Star-Quotes-About-the-Beauty-of-the-Night-Sky.jpg)' }}
    >
   
      <div className="cocktail-container-top">
        <Header />
      </div>
      <div className="cocktail-container-buttom">
        
      <div >
        <div className="drink-select-option"
         
        >
          {/* <CocktailContext.Provider
            value={{
              fetchdrinks,}} >
            <SearchFilter />
            <Populardrinks />
            <FavoriteList/>
          </CocktailContext.Provider> */}
        </div>
        <div className="random-cocktails">
          <h1>RANDOM COCKTAILS</h1>
        </div>
        <div>
          <HeartSvg />
        </div>

       
       
        <br></br>
      </div>
     
        </div>
    </div>
  );
}
