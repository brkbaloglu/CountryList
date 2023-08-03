
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [countries,setCountries] = useState([])
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountries(response.data)
    }).catch(error => console.log(error))
  })

   console.log(countries)
  

  return (
    <div>
      <div className='grid grid-cols-5 py-6 px-10 border-b-2 border-black sticky top-0 z-50 bg-white'>
        <h2 className='text-center text-xl font-bold'>Bayrak</h2>
        <h2 className='text-center text-xl font-bold'>İsim</h2>
        <h2 className='text-center text-xl font-bold'>Başkent</h2>
        <h2 className='text-center text-xl font-bold'>Saat Dilimi</h2>
        <h2 className='text-center text-xl font-bold'>Ülke Kodu</h2>
      </div>
      {countries.map(country => {
        return(
          <div key={country.name.common} className='grid grid-cols-5 py-6 px-10 border-b-2 border-gray-300'>
            <img src={country.flags.png} alt="" />
            <h2 className='text-center'>{country.name.common}</h2>
            <h4 className='text-center'>{country.capital}</h4>
            <h4 className='text-center '>{country.timezones[0]}</h4>
            <h4 className='text-center'>{country.cca2}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;
