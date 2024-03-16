import './App.css';
import axios from "axios";
import {useState} from "react";
import worldMap from "./assets/world_map.png"
import {region} from "./helpers/region.js";

function App() {
    //stukje state
    const [countries, setCountries] = useState([]);
    const [show, toggleShow] = useState(true)

    const hideButton = () => {
        toggleShow(!show);
    }

    //de async functie
    async function fetchCountries () {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            console.log(response.data[4])
            setCountries(response.data.sort((a,b) => {
                return a.population - b.population
            }))
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <span className={"wrapper-img-header"}>
                <img src={worldMap} alt="plaatje van wereldmap"/>
            </span>
            <h1>World Regions</h1>
            {show && <button onClick={() => {fetchCountries(); hideButton()}}>
                Click on me!
            </button>
            }
            <ul>
                {countries.map((country) => {
                   return <li key={country.name.common} className={"container"}>
                       <span className={"wrapper-img"}>
                            <img src={country.flags.png} alt={country.flags.alt}/>
                       </span>
                       <h4 className={region(country.region)}>{country.name.common}</h4>
                       <p>Has a population of {country.population} people</p>
                   </li>
                })}
            </ul>
        </>
    )
}

export default App