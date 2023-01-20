import Select from "react-select";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { CocktailContext } from ".";



export default function SearchFilter() {
  const [cocktails, setCocktails] = useState([]);
//   const fetchdrinks = useContext(CocktailContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onFormValueChange = (strDrink) => {
    // console.log(strDrink); useg bichihed api duudaj bga
    setInput(strDrink);
    if (strDrink) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
        )
        .then((res) =>
          setCocktails(
            res.data.drinks.map((drink) => {
              return {
                value: drink.idDrink,
                label: drink.strDrink,
                // value: drink.strDrink
              };
              // console.log(drink,"Hi")
            })
          )
        )
        .catch(() => {
          console.log("Cocktail Not Found");
        });
    } else {
      setCocktails([]);
      setInput("");
    }
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
  };

  return (

    <div>
      <Select style={{color:'red'}} className="cocktail-search-select"  placeholder='Search Your Cocktail Here...'
        isSearchable={true}
        onChange={(option) => {
          navigate(option.value)

          console.log(option) }}
        
        options={cocktails}
        onInputChange={onFormValueChange}
        inputValue={input}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
           
          },
        })}
        styles={customStyles}
      />
    </div>
  );
}
