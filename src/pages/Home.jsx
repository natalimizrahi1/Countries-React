import React from "react";
import CountriesData from "../assets/CountriesData.json";
import Country from "../components/Country";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <FilterBar />

      <main className='main'>
        <div className='container'>
          <section id='countries-grid' className='countries-grid'>
            {CountriesData.map(country => (
              <Country key={country.name} country={country} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
