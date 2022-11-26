import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country';
import Cart from './Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        console.log(data)
      })
  }, [])
  const addHandler = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
    console.log("Added Here", country);
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} addHandler={addHandler} key={country.alpha3Code}></Country>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
