import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CocktailSearch from "./solo-project";
import DrinkDetails from "./solo-project/drink-details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<CocktailSearch />}>
            <Route path="Cocktails" element={<CocktailSearch />} />
            <Route path=":idDrink" element={<DrinkDetails />} />
          </Route> */}
          <Route path="/" >
              <Route index element={<CocktailSearch/>}/> 
              {/* <Route path="/drink" element={<Drink/>}/> */}
              <Route path=":idDrink" element={<DrinkDetails/>}  />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
