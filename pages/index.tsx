import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter'; // Hier importieren

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <VisitorCounter /> {/* Hier einfügen */}
    </div>
  );
}

export default Home;


