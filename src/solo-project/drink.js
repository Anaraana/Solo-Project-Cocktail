import React, { useCallback, useContext, useEffect, useState } from "react";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { CocktailContext } from "./layout";

export default function Populardrinks(cocktailsName) {
  const [loading, setLoading] = useState(false);

  const { popular, setPopular, updateFavoriteDrinks, favoriteDrinks } =
    useContext(CocktailContext);
  const navigate = useNavigate();
  console.log(cocktailsName); //neree olood darhad api duudaj bga

  const fetchdrinks = useCallback(() => {
    setLoading(true);
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        setPopular(res.data.drinks);
        console.log(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchdrinks();
  }, [fetchdrinks]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {popular.map((drink, idx) => {
        return (
          <div key={idx}>
            <button className="cocktail-button" onClick={fetchdrinks}>
              Find Your Favorite
            </button>
            <div
              onClick={() => {
                navigate(`${drink.idDrink}`, { state: drink });
              }}
            >
              <div className="find-your-favorite">
                <h1>{drink.strDrink}</h1>
              </div>
              <img
                style={{
                  width: "500px",
                  height: "500px",
                  border: "1px solid white",
                  borderRadius: "15px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
                src={drink.strDrinkThumb}
                alt="#"
              />
            </div>
            <span
              onClick={() => {
                console.log(popular);
                //{drinks:,idrinks:[id1,id,id2]}
                updateFavoriteDrinks({
                  type: favoriteDrinks?.idDrink.includes(popular[0]?.idDrink)
                    ? "removeFromFavorite"
                    : "addToFavorite",
                  data: {
                    idDrink: popular[0]?.idDrink,
                    strDrink: popular[0]?.strDrink,
                  },
                });
              }}
            >
              {favoriteDrinks.idDrink.includes(popular[0]?.idDrink) ? (
                <MdFavorite color="red" size={25} />
              ) : (
                <MdFavoriteBorder size={25} />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
