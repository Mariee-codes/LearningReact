import Joke from "./joke"
import jokesData from "./jokesData" 

export default function App() {
const jokeElements = jokesData.map((joke) =>{
    return <Joke setup = {joke.setup} punchline={joke.punchline}  />
}
)

    const ninjaTurtles = [
        <h2>Donatello</h2>,
        <h2>Michaelonglo</h2>,
        <h2>Raphael"</h2>,
        <h2>Leornado</h2>]
    return(
        <main>
            {ninjaTurtles }
        </main>
    )
}


//mapping components



