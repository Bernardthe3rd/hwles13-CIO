import './App.css';
import axios from "axios";
import {useState} from "react";
// import {region} from "./helpers/region.js";

function App() {
    //stukje state
    const [countries, getCountries] = useState([]);

    //de async functie
    async function fetchCountries () {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            console.log(response.data[4])
            getCountries(response.data.sort((a,b) => {
                return a.population - b.population
            })) //data hier sorteren
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Kleine titel om overzicht te maken</h1>
            <button onClick={fetchCountries}>
                Click on me!
            </button>
            <ul>
                {countries.map((country) => {
                   return <li key={country.name.common} className={"container"}>
                       <span className={"wrapper-img"}>
                            <img src={country.flags.png} alt={country.flags.alt}/>
                       </span>
                       <h4>{country.name.common}</h4>
                       <p>Has a population of {country.population} people</p>
                   </li>
                })}
            </ul>
        </>
    )
}

export default App
