import React from 'react';
import './NewQuoteButton.scss';

export default function NewQuoteButton(props) {

  const { getQuote, changeBg } = props;

  const handleClick = () => {
    getQuote();
    changeBg();
    console.log('clicked')
  }

  return (
    <div className='quoteButtons'>
      <a href='twitter.com/intent/tweet' id='tweet-quote'>&lArr;</a>
      <button id='new-quote' onClick={handleClick}>New Quote</button>
    </div>
  )
};

