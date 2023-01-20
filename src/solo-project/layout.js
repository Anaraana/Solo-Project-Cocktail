import React, {useReducer,createContext, useEffect,useState} from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import CocktailSearch from ".";
import FavDrinks from "./favorite";
import SearchFilter from "./search-filter";
import Header from "./header";



const reducerDrinks = (curr, action) => {
    console.log(action);
    switch (action.type) {
      case "addToFavorite":
        return {
          drinks:[...curr.drinks, action.data ],
       idDrink:[...curr.idDrink, action.data.idDrink],
        };
        case 'removeFromFavorite':
            return{
                drinks:curr.drinks.filter(
                    (drink)=>drink.idDrink!==action.data.idDrink
                ),
                idDrink: curr.idDrink.filter(
                    (idx)=>idx !== action.data.idDrink
                ),
            };
            default:
                window.alert ('error');
      
      }
    }

export const CocktailContext = createContext();
export default function Layout (){
    const [favoriteDrinks, updateFavoriteDrinks] = useReducer(
        reducerDrinks,
        localStorage.getItem("favoriteDrinks")
          ? JSON.parse(localStorage.getItem("favoriteDrinks"))
          : { drinks: [{}], idDrink: [] }
      );
      const [popular,setPopular]=useState([]);
  const {idDrink}=useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem('favoriteDrinks',JSON.stringify(favoriteDrinks))
  },[favoriteDrinks])
    
    return (
        <div className="cocktails-main-container"
        // style={{opacity:'1px',backgroundImage:'url(https://everydaypower.com/wp-content/uploads/2021/05/50-Star-Quotes-About-the-Beauty-of-the-Night-Sky.jpg)' }}
        >
        <div className="cocktail-container-top">
            <Header/>
        </div>
        
            <div className="'drink-select-option"></div>
        <CocktailContext.Provider className='cocktail-provider' value={{ favoriteDrinks,updateFavoriteDrinks,popular,setPopular }}>
            <SearchFilter/>
       <div className='favorite-drink-container'>
       <div><Outlet className='outlet'/></div>
       <div><FavDrinks className='favdrinks'/></div>
       </div>
       
      </CocktailContext.Provider>
      <div className="random-cocktails">
       
        </div>
      
      
     
      </div>
    )
}

