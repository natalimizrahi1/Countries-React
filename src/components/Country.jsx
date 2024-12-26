import React from "react";

const Country = ({ country }) => {
  return (
    // TODO: Country component from countriesData
    <>
      <a href='#' className='country scale-effect' data-country-name={country.name}>
        <div className='country-flag'>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className='country-info'>
          <h2 className='country-title'>{country.name}</h2>
          <ul className='country-brief'>
            <li>
              <strong>population:</strong> {country.population}
            </li>
            <li>
              <strong>Region: </strong>
              {country.region}
            </li>
            <li>
              <strong>capital:</strong> {country.capital}
            </li>
          </ul>
        </div>
      </a>
    </>
  );
};

export default Country;
