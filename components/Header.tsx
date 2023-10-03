import React from 'react';
import logo from './logo.jpg'; // Pfad zur Logo-Datei

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white text-center">
      <div className="flex items-center justify-center">
        <img src={require('./logo.jpg')} alt="Logo" className="w-8 h-8 mr-2" />

        <h1 className="text-2xl font-semibold">My Tailwind Website</h1>
      </div>
    </header>
  );
};

export default Header;




