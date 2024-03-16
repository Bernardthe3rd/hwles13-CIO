import './App.css';
import {useState} from "react";
import axios from "axios";
import {amounts} from "./helpers/amounts.js";

function App() {

    const [country, setCountry] = useState([])
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    async function fetchData () {
        try {
            setLoading(true)
            const response = await axios.get(`https://restcountries.com/v3.1/name/${value}`)
            console.log(response.data[0])
            setCountry(response.data);
            setValue("")
            setError("")
        } catch(e) {
            console.error(e);
            console.log(e.response.status)
            setError(`${value} bestaat niet. Probeer het opnieuw`)
            setValue("")
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <h1>Search country information</h1>
            {loading && <p>Loading...</p>}
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} placeholder={"Bijvoorbeeld: Nederland of IJsland"}></input>
            <button type={"submit"} onClick={fetchData}>zoeken</button>
            {error && <p className={"error"}>{error}</p>}
            { !error && country.map((nation) => {
                return <article key={nation.name} className={"outer-container"}>
                    <div className={"container"}>
                        <span className={"wrapper-flag"}>
                            <img src={nation.flags.svg} alt={nation.flags.alt}/>
                        </span>
                        <h2>{nation.name.common}</h2>
                    </div>
                    <p>{nation.name.common} is situated in {nation.subregion} and the capital is {nation.capital}</p>
                    <p>It has a population of {amounts(nation.population)} million people and it borders with {nation.borders.length} neighboring countries</p>
                    <p>Websites can be found on {nation.tld} domain's</p>
                </article>
            })}
        </>
    )
}

export default App
