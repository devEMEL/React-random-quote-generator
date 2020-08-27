import React from 'react';
import './NewQuote.scss';

export default function NewQuote(props) {

  const { quote, error } = props;
  return (
    <div className='new-quote'>
      {/* <div className='quote-icon'>quote icon goes here</div> */}
        {error
          ? (<h2 id='text' style={{color: 'red',fontWeight: 400 }}>something went wrong!</h2>)
          : (
            <React.Fragment>
              <h2 id='text'>{quote.quote}</h2>
              <p id='author'>- {quote.author}</p>
            </React.Fragment>
          )
        }
      
    </div>
  )
};

