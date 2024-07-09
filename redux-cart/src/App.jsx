import React from 'react';
import { Provider } from 'react-redux';
import { store } from './features/store';
import Cart from './Components/Cart.jsx';
import ProductsPage from './Components/ProductsPage.jsx';
import './App.css'

export const App = () => {
  return (
      <Provider store={store}>
            <div className="App">
                <div className="container">
                    <ProductsPage />
                </div>
                <div className="icon">
                    <Cart />
                </div>
            </div>
        </Provider>  )
}

