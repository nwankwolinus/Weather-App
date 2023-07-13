import React from "react";

const CountryList = ({ countries, showCountry }) => {
      

      return (
        <div style={{ margin: "20px 0" }}>
          {countries.length >= 10 ? (
            <div>Too many matches, specify another filter</div>
          ) : (
            <div>
              {countries.map(c =>
              <p key={c.fifa}>
                {c.name.common}
              <button onClick={() => showCountry(c.name.common)}>
                  show
              </button>
              </p>
            )}
            </div>
          )}
        </div>
      );
  }

export default CountryList