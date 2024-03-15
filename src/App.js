import { Provider } from 'react-redux';
// import StoreList from './pages/StoreList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import StoreList from './pages/StoreList';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';





function App() {
  return(
    <div>
    <BrowserRouter>
<Routes>

<Route path="/" element={<ProductPage/>}></Route>
<Route path="/storelist" element={<StoreList/>}></Route>
<Route path="/product/:id" element={<ProductDetailsPage/>}/>
</Routes>


</BrowserRouter>
    
      {/* <Provider router={router} /> */}
    </div>
  );
}

export default App;