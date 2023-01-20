import {Avatar, List} from "antd";
import { useContext, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CocktailContext } from "./layout";

export default function FavDrinks() {
  const {
    updateFavoriteDrinks,
    favoriteDrinks,
  } = useContext(CocktailContext);
  
  const [ setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    
      <div>
        <div className="favorite-drink-name"><b>Favorite Drink</b></div>
    <div className="loved-drink-container"> 
   
      {favoriteDrinks.drinks.length > 0
        ? favoriteDrinks.drinks?.map((drink, id) => {
            console.log(drink, "DIIRNK");
            return (
              <div   key={id}>
                <span className="hover"
                onClick={()=>{
                  navigate(`${drink.idDrink}`)
                }}>{drink.strDrink}</span>

                <span 
                  onClick={() => {
                    updateFavoriteDrinks({
                      type: favoriteDrinks?.idDrink.includes(drink.idDrink)
                        ? "removeFromFavorite"
                        : "addToFavorite",
                      data: {
                        idDrink: drink.idDrink,
                        strDrink: drink.strDrink,
                      },
                    });
                  }}
                >
                  {favoriteDrinks.idDrink.includes(drink.idDrink) ? (
                    <MdFavorite color="hotpink" size={35} />
                  ) : (
                    <MdFavoriteBorder size={35} />
                  )}
                </span>
              </div>
            );
          })
        : "Please Add Your First Favorite Drink"}
    </div>
    </div>
   
  );
}

// nemegdej bgaa detail and random
// tseverleed push git!!!!
// favorite drink local storage Save
// local stroage deer bgaa esehees hamaarad update hiine
