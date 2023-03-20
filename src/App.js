import './App.css';
//  import ProductMainPage from './Component/ProductPage/ProductMainPage';
import Search from "./Component/Home com/Search";
import BestOffers from './Component/Home com/offers';
import Card from './Component/Home com/resturent';
function App() {
  
  return (
    <div className="App">
      <Search/>
     <BestOffers/>
      <Card/>
      {/* <ProductMainPage/> */}
    </div>
  );
}

export default App;
