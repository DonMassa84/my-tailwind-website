import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Lade den aktuellen Besucherzähler aus dem Local Storage
    const count = parseInt(localStorage.getItem('visitorCount')) || 0;
    setVisitorCount(count);

    // Erhöhe den Besucherzähler und speichere ihn im Local Storage
    localStorage.setItem('visitorCount', String(count + 1));
  }, []);

  return (
    <footer className="bg-gray-200 p-4 text-center">
      Besucher-Anzahl: {visitorCount}
    </footer>
  );
}

export default VisitorCounter;


