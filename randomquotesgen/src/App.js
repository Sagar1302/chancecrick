import Header from './Header';
import './App.css';
import {useState ,useEffect} from 'react';
 
const quotesdata = [{id: 1, quotes:"The greatest glory in living lies not in never falling, but in rising every time we fall."},
{ id: 2,quotes:"The way to get started is to quit talking and begin doing."},
{ id: 3,quotes:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."},
{ id: 4,quotes:"The future belongs to those who believe in the beauty of their dreams"},
{ id: 5,quotes:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."},
{id: 6, quotes:"You only live once, but if you do it right, once is enough."},
{ id: 7,quotes:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
{ id: 8,quotes:"Don't worry when you are not recognized, but strive to be worthy of recognition."},
{ id: 9,quotes:"The greatest glory in living lies not in never falling, but in rising every time we fall."},
{ id: 10,quotes:"Life is really simple, but we insist on making it complicated."},{id: 1, quotes:"The greatest glory in living lies not in never falling, but in rising every time we fall."},
{ id: 11,quotes:"Life itself is the most wonderful fairy tale."},
{ id: 12,quotes:"Do not let making a living prevent you from making a life."},
{ id: 13,quotes:"Go confidently in the direction of your dreams! Live the life you've imagined."},
];

function App() {
  const [data ,setData] = useState(quotesdata);
  const [ranQuote , setRanQuote] = useState({});


function randomNumGen(){  
    let dd = (Math.floor(Math.random()*13)+1);
    getElementById(dd);
}


const getElementById = (ranNum) => {
  const quote = data.find(item => item.id === ranNum);
  setRanQuote(quote || {});
}


useEffect(() => {
  randomNumGen();
}, []);


  return(
    <div className='app'>
      < Header />
      <p className='appQuotes'>
          {ranQuote.quotes}
      </p>
      <button 
          onClick={randomNumGen}
          className='appButton'>
        Generate Quotes
     </button>
    </div>
  ) ;
}

export default App;
