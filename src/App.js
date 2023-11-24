import "./styles.css";
import { useEffect, useState } from "react";
function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [Quotes, setQuotes] = useState([]);
  const [Quote, setQuote] = useState(null);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(Quotes));
  }

  return (
    <div className="App">
      <main>
        <h1>Project 3: Quote Generator</h1>
        <section>
          <button onClick={getNewQuote}>New Quote</button>
          <h3>
            <span>“</span>

            {Quote?.text}
          </h3>
          <i>-{Quote?.author}</i>
        </section>
      </main>
    </div>
  );
}
