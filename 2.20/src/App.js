import axios from "axios"
import { useState, useEffect } from "react"
import CountryList from "./components/CountryList"
import Country from "./components/Country"

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data)
    })
  }, [])

  const matchedContries = countries.filter(c => c.name.common.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <div>
        find country <input value={search} onChange={({ target }) => setSearch(target.value)} />
      </div>
      {!search ? null : matchedContries.length === 1 ? (
        <Country country={matchedContries[0]} />
      ) : (
      <CountryList 
        countries={matchedContries ? matchedContries : []}
        showCountry={setSearch}
      />
      )}
    </div>
  );
}

export default App