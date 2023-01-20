import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrinkDetails from "./solo-project/drink-details";
import Layout from "./solo-project/layout";
import Populardrinks from "./solo-project/drink";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<Populardrinks/>}/> 
              {/* <Route path="/drink" element={<Drink/>}/> */}
              <Route path=":idDrink" element={<DrinkDetails/>}  />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
