import React from 'react';
import Header from '../components/lp/Header';
import Hero from '../components/lp/Hero';
import Features from '../components/lp/Features';
import Step from '../components/lp/Step';
import Recently from '../components/lp/Recently';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Step />
      <Recently />
    </>
  );
};

export default Home;
