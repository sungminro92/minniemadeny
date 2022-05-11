import logo from './logo.svg';
import './App.css';
//IMPORT CREATESTORE
import { Provider } from "react-redux";
import AuthProvider from "./context/auth";
import configureStore from './configureStore'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ShopFlowers from './pages/ShopFlowers'
import ShopWallDecors from './pages/ShopWallDecors'
import ShopArts from './pages/ShopArts'
import HomePage from './pages/HomePage'
import ProductInfo from './pages/ProductInfo'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import Navigation from './components/Navigation'
const store = configureStore()

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Provider store={store}>
        {/* <div className="App container mx-auto bg-gray-200 ">
        <h1>MinnieMadeNY website</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div> */}
        <div>
          <Navigation />
          <Switch>
            <Route path="/wire-flowers" component={ShopFlowers} />
            <Route path="/wire-wall-decors" component={ShopWallDecors} />
            <Route path="/wire-arts-accessories" component={ShopArts} />
            <Route path="/product-details" component={ProductInfo} />
            <Route path="/cart" component={CartPage} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/" component={HomePage} />
          </Switch >
        </div >
      </Provider >
    </Router>
    // </AuthProvider >
  )

}

export default App;
