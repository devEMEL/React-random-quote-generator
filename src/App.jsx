import React, { useState, useEffect } from 'react';
import './App.scss';
import NewQuote from './components/NewQuote.jsx';
import NewQuoteButton from './components/NewQuoteButton.jsx';
import axios from 'axios';


export default function App() {

  const [quote, setQuote] = useState({});
  const [error, setError] = useState('');

  const getQuote = async () => {
    const PATH_BASE = 'https://random-math-quote-api.herokuapp.com';
    // const url = PATH_BASE; 
    axios.get(PATH_BASE)
      .then(res => {
        setQuote(res.data)
        console.log(res.data)
      })
      .catch(err => {
        setError(err)
      })
  }

  const changeBg = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 200)},
      ${Math.floor(Math.random() * 200)},
      ${Math.floor(Math.random() * 200)})`;

    return color;
  }

  useEffect(() => {
    getQuote()

  }, [])

  return (

    // On first load, my quote machine displays a random quote in the element with id='text' and the quote's author in the element with id='author'.

    // When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element and the quotes author in the #author element.

    // I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quotebundleRenderer.renderToStream

    // The #quote-box should be horizontally centered.

    <div id='app'>
      <h2 className='quote-title'>random quote generator</h2>
      <div id='quote-box'>
      {/* No quote array, only generates a quote from a random id */}
        
        <NewQuote quote={quote} error={error}/>
        <NewQuoteButton getQuote={getQuote} changeBg={changeBg}/>
      </div>
      <p className='coder'>by Ajaebionu Dominic Henry</p>
    </div>
  )
};

