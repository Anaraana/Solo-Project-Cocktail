import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "./header";
import SearchFilter from "./search-filter";
import Populardrinks from "./drink";
import HeartSvg from "./cart";

export const CocktailContext = createContext();

export default function CocktailSearch() {
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const fetchdrinks = (cocktailsName) => {
    console.log(cocktailsName); //neree olood darhad api duudaj bga
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailsName}`
      )
      .then((res) => {
        // setCocktails(res.data.drinks);
        setSearch(res.data.drinks);
        // navigate(`${res.data.drinks[0].idDrink}`)
        navigate(`${res.data.drinks[0].idDrink}`);
        console.log(res.data.drinks[0].idDrink);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  return (
    <div className="cocktails-main-container">
   
      <div className="cocktail-container-top">
        <Header />
      </div>
      <div className="cocktail-container-buttom">
      <div >
        <div className="drink-select-option"
         
        >
          <CocktailContext.Provider
            value={{
              fetchdrinks,
            }}
          >
            <SearchFilter />
            <Populardrinks />
          </CocktailContext.Provider>
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
