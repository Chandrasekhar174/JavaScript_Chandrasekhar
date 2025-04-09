import React, { use, useState } from 'react'
import './style.css';
import logo from './assets/logo.png'

const quotes=[
    {quote:"A rose by any other name would smell as sweet", author:"William Shakespeare"},
    {quote:"All that glitters is not gold.", author:"William Shakespeare"},
    {quote:"Genius is one percent inspiration and ninety-nine percent perspiration.", author:"Thomas Edison"},
    {quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", author:"Martin Luther King	"},
    {quote:"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.", author:"Robert Frost	"},
    {quote:"You must be the change you wish to see in the world.", author:"Mahatma Gandhi"},
    {quote:"There's no place like home.	", author:"Dorothy"}
];
const colors=["#ff000080","#00ff0080","#0000ff80","hsl(120, 100%, 75%)",];
function randomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}
function randomQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)];
}
const App = () => {
    const q=quotes[Math.floor(Math.random()*quotes.length)];
    const [quote,setQuote]=useState(q.quote);
    const [author,setAuthor]=useState(q.author);
    const [color,setColor]=useState(colors[Math.floor(Math.random()*colors.length)]);

    const handelQuote= ()=>{
        const c=randomColor();
        const q=randomQuote();
        setQuote(q.quote);
        setAuthor(q.author);
        setColor(c);
        document.body.style.backgroundColor=c;
    }
  return (
    <div id="quote-box">
        <p id="text" style={{color:setColor}}>{quote}</p>
        <p id="author" style={{color:setColor}}> {author}</p>
        
        <div className='a-btn'>
            <a id="tweet-quote" href='https://www.twitter.com/intent/tweet'>
                <i className='fa fa-twitter fa-2x' ></i>
            </a>
            <button id="new-quote" onClick={handelQuote}>new-quote</button>
        </div>
    </div>
  )
}

export default App;
