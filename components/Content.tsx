import React, { useState, useEffect } from 'react';

const Content = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then(response => response.json())
      .then(data => setQuote(data.value));
  }, []);

  const fetchNewQuote = () => {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then(response => response.json())
      .then(data => setQuote(data.value));
  };

  return (
    <main className="p-4">
      <div className="text-gray-800">
        <p>{quote}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchNewQuote}>
          Neues Zitat
        </button>
      </div>
    </main>
  );
};

export default Content;

