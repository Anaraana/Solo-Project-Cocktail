import React, {useCallback, useEffect,useState, } from "react";
import {AiFillHeart,AiOutlineHeart } from 'react-icons/ai'

import axios from "axios";
import { useNavigate } from "react-router-dom";



// const cocktailsImages = [
//   { name: "Mojito", image: mojitoImg , idx: 1},
//   { name: "Negroni", image: negroniImg },
//   { name: "Daiquiri", image: daiquiriImg },
//   { name: "Martini", image: martiniImg },
// ];


export default function Populardrinks (cocktailsName) {
    const [popular,setPopular]=useState([]);
    const [loading,setLoading]=useState(false);
    const [favoriteList, setFavoriteList]=useState(false);
    const navigate = useNavigate();
    console.log(cocktailsName )   //neree olood darhad api duudaj bga
   const fetchdrinks= useCallback(()=>{
    setLoading(true);
    axios
    .get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'

    )
    .then((res) => {
   setPopular(res.data.drinks)
   console.log(res.data.drinks)
  
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setLoading(false));
   },[])

   useEffect(()=>{
    fetchdrinks();
   },[fetchdrinks])
   
  if(loading){
    return <h2>Loading...</h2>;
    
  }
    
  return (
    <div>
      {popular.map((drink, idx) => {
        return (
            <div key={idx}><button className="cocktail-button" onClick={fetchdrinks}>Find Your Favorite</button>
          <div onClick={() => {navigate(`${drink.idDrink}`)}}>
            <div className="find-your-favorite"><h1>{drink.strDrink}</h1></div>
            <img style={{width:'900px', height:'900px',border:'1px solid white' ,borderRadius:'15px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}} src={drink.strDrinkThumb} alt='#'/>
          
          </div>
</div>
        );
      })}
    {favoriteList ? (
                      <AiFillHeart style={{width:'40px', height:'40px', color:'hotpink'}}
                        onClick={() => {
                          setFavoriteList((currState) =>{
                            // type: "add-to-favorite",
                            // data: {song}
                            return !currState;
                          });
                          console.log(favoriteList);
                        }}
                      />
                    ) : (
                      <AiOutlineHeart style={{width:'40px', height:'40px', color:'white'}}
                        onClick={() => {
                            setFavoriteList((currState) => {
                            return !currState;
                          });
                          console.log(favoriteList);
                        }}
                      />
                    )}
            
    </div>
    
  );
  
    }
