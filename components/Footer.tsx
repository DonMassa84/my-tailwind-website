import React, { useState, useEffect } from 'react';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitorCount')) || 0;
    setVisitorCount(count);
    localStorage.setItem('visitorCount', String(count + 1));
  }, []);

  return (
    <footer className="bg-gray-200 p-4 text-center">
      Besucher-Anzahl: {visitorCount}
    </footer>
  );
}

export default Footer;


