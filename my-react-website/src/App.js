import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
