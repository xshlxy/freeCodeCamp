const { useState, useEffect } = React;

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || "Unknown");
    } catch (error) {
      console.error("Error fetching quote: ", error);
      setQuote("Error fetching quote.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">"{quote}"</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
